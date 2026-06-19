import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        'components':  '/src/components',
        'stylesheets': '/src/stylesheets',
        'hooks':       '/src/hooks',
        'imgs':        '/src/imgs',
        'icons':       '/src/icons',
        'files':       '/src/files',
        'languages':   '/src/languages',
      }
    }
  }
});
