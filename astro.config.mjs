// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://alan19.github.io',
    base: "/vg-rideline-showcase",
    integrations: [mdx(), sitemap(), react()],
});