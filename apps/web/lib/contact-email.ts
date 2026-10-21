type ContactMessage = { name: string; email: string; message: string; website?: string };

/** Browser-side EmailJS REST integration; these three identifiers are public. */
export async function sendContactEmail(input: ContactMessage) {
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();
  if (input.website || !name || name.length > 100 || /[\r\n\u0000]/.test(name) || !message || message.length > 5000 || email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) {
    throw new Error('Periksa nama, email, dan pesan. Semua kolom wajib diisi dengan benar.');
  }
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim();
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();
  if (!serviceId || !templateId || !publicKey) throw new Error('Layanan email belum tersedia. Silakan hubungi sayitipb@gmail.com langsung.');
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: controller.signal,
      body: JSON.stringify({
        service_id: serviceId, template_id: templateId, user_id: publicKey,
        // The recipient is fixed in the EmailJS template, never visitor input.
        template_params: { name, email, message },
      }),
    });
    if (response.status === 429) throw new Error('Terlalu banyak pesan. Tunggu sebentar lalu coba lagi.');
    if (!response.ok) throw new Error('Pesan belum berhasil dikirim. Silakan coba lagi atau hubungi sayitipb@gmail.com langsung.');
  } catch (cause) {
    if (controller.signal.aborted) throw new Error('Waktu tunggu habis. Status pengiriman belum dapat dipastikan. Silakan hubungi sayitipb@gmail.com jika diperlukan.');
    if (cause instanceof TypeError) throw new Error('Koneksi bermasalah. Periksa internet lalu coba lagi.');
    throw cause;
  } finally { clearTimeout(timeout); }
}
