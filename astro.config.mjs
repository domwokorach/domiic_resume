import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static",
  vite: {
    optimizeDeps: {
      exclude: ['pdfjs-dist'],
    },
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  })
});