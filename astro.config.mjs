// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import {defineConfig, fontProviders} from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://alan19.github.io',
    base: "/vg-ridelines",
    integrations: [mdx(), sitemap(), react()],
    vite: {
        ssr: {
            noExternal: ['beercss']
        }
    },
    image: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.cf-vanguard.com'
            }
        ]
    },
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Inter",
            cssVariable: "--font-inter",
            styles: ["normal"],
            weights: ["100 900"]
        },
        {
            provider: fontProviders.fontsource(),
            name: "Audiowide",
            cssVariable: "--font-audiowide"
        }
    ]
});