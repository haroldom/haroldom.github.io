// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://haroldom.github.io',
  vite: {
    build: {
      // Lightning CSS drops the standard backdrop-filter declaration in production.
      cssMinify: 'esbuild',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
