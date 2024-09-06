import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), tailwind(), alpinejs()],
  output: 'server',
  adapter: netlify(),
});
