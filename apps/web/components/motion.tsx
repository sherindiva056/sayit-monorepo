'use client';
import { motion, useReducedMotion } from 'framer-motion';
export function Reveal({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return <motion.div initial={false} whileInView={reduce === false ? { opacity: [0.65, 1], y: [18, 0] } : undefined} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}>{children}</motion.div>;
}
export function Orbs() {
  const reduce = useReducedMotion();
  return <div className="orbs" aria-hidden="true">{[0, 1].map(i => <motion.div key={i} className={`orb orb-${i}`} animate={reduce === false ? { x: [0, 45, -25, 0], y: [0, -35, 30, 0], scale: [1, 1.12, 0.95, 1] } : undefined} transition={{ duration: 26 + i * 8, repeat: Infinity, ease: 'easeInOut' }} />)}</div>;
}
