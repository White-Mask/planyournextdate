import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { sitemapPlugin } from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://planyournextdate.xyz',
  integrations: [tailwind(), sitemapPlugin()],
});