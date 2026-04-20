import type {APIRoute} from "astro";
import fs from "node:fs";
import Papa from "papaparse";
import type {DeckCard} from "../../pricing.ts";

export const GET = (({params, request}) => {
    const deck = params.deck;
    let filePath = `src/content/prices/${deck}.csv`;
    let deckCards = Papa.parse<DeckCard>(fs.readFileSync(filePath).toString(), {header: true, dynamicTyping: true, skipEmptyLines: true}).data;
    return new Response(JSON.stringify(deckCards))
}) satisfies APIRoute;

export async function getStaticPaths() {
    return fs.readdirSync('src/content/prices').map(value => ({params: {deck: value.split('.').at(0)}}))
}