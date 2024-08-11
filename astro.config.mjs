import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: 'https://planyournextdate.xyz',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date('2024-08-11'),
    })
  ],
});