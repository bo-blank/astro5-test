// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://astro-5-test-blog.netlify.app/",

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  },

  integrations: [react()],

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
      langs: [
        'js',
        'ts',
        'tsx',
        'jsx',
        'py',
        'python',
        'html',
        'css',
        'json',
        'yaml',
        'bash',
        'sh',
        'astro',
        'markdown',
        'md',
      ],
    },
  },
});
