import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import {url} from "zod/v4";

export enum Nation {
    de = "Dragon Empire",
    keter = "Keter Sanctuary",
    ds = "Dark States",
    stoicheia = "Stoicheia",
    brandt = "Brandt Gate",
    lyrical = "Lyrical Monasterio"
}

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const decks = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: './src/content/decks', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            // Card art image path
            ['card-art']: image(),
            nation: z.nativeEnum(Nation),
            rideline: z.array(z.string().url().or(image())).max(4),
            ['key-cards']: z.array(z.string().url().or(image())).max(4),
            generics: z.array(z.string().url().or(image())).max(4),
            advantages: z.array(z.string()),
            disadvantages: z.array(z.string()),
            ['deck-notes']: z.array(z.string()),
            ['core-cost']: z.number().min(0).max(4),
            ['generics-cost']: z.number().min(0).max(4),
            ['offense']: z.number().min(0).max(4),
            ['control']: z.number().min(0).max(4),
            ['value']: z.number().min(0).max(4),
        }),
});


export const collections = { blog, decks };
