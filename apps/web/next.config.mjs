import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

/** @returns {import('next').NextConfig} */
export default function config(phase) {
  // Production builds must not overwrite a running development server's files.
  return {
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
    webpack(config, { dev }) {
      // Keep production compilation caches in memory on low-storage machines.
      if (!dev) config.cache = { type: 'memory' };
      return config;
    },
  };
}
