import type {APIRoute} from "astro";
import fs from "node:fs";
import Papa from "papaparse";
import type {DeckCard} from "../../pricing.ts";
import path from "node:path";
import {getCollection} from "astro:content";

export const GET = (({params: {slug: deck}}) => {
    let filePath = path.join('src/content/prices', `${deck}.csv`);
    if (fs.existsSync(filePath)) {
        let deckCards = Papa.parse<DeckCard>(fs.readFileSync(filePath).toString(), {header: true, dynamicTyping: true, skipEmptyLines: true}).data;
        return new Response(JSON.stringify(deckCards))
    }
    else {
        return new Response(JSON.stringify([]))
    }
}) satisfies APIRoute;

export async function getStaticPaths() {
    const posts = await getCollection('decks');
    return posts.map(post => ({
        params: {slug: post.id},
        props: post,
    }));
}