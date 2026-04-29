import axios from "axios";
import Papa from "papaparse";
import fs from "node:fs";
import {isBefore} from "date-fns";

import type {CardDatabaseEntry} from "../../types.ts";

const userAgent = import.meta.env.USER_AGENT

const dProductIDList = [
    2783,
    2784,
    2785,
    2786,
    2787,
    2788,
    2797,
    2814,
    2831,
    2876,
    2884,
    2894,
    2895,
    2927,
    2928,
    2962,
    2963,
    2971,
    3008,
    3012,
    3014,
    3061,
    3063,
    3095,
    3097,
    3106,
    3107,
    3108,
    3110,
    3162,
    3183,
    17706,
    17708,
    22871,
    23108,
    23134,
    23192,
    23193,
    23229,
    23230,
    23246,
    23251,
    23252,
    23253,
    23256,
    23290,
    23308,
    23309,
    23346,
    23372,
    23373,
    23374,
    23375,
    23376,
    23377,
    23394,
    23419,
    23437,
    23438,
    23467,
    23487,
    23513,
    23563,
    23564,
    23577,
    23578,
    23736,
    23990,
    23997,
    24289,
    24290,
    24293,
    24294,
    24362,
    24363,
    24364,
    24365,
    24389,
    24418,
    24523,
    24562,
    24585,
    24586,
    24589,
    24588,
    24615,
    24651,
    24652,
    24636,
    24592
]

export const cardDB: Promise<CardDatabaseEntry[]> = new Promise((resolve) => {
    // If card DB is blank, or it has been 24 hours since last update, update the cardDB and lastUpdated atoms and print log message, otherwise, return the existing atom values
    const filePath = "node_modules/.astro/db.json";
    resolve(axios.get('https://tcgcsv.com/last-updated.txt', {headers: {"User-Agent": userAgent}})
        .then(value => new Date(value.data))
        .then(lastUpdated => {
            if (!fs.existsSync(filePath) || isBefore(fs.statSync(filePath).mtime, lastUpdated)) {
                console.log("Updating card DB!")
                return getCardPriceList().then(db => {
                    fs.writeFileSync(filePath, JSON.stringify(db, null, 1))
                    return db;
                });
            } else {
                console.debug("Using cached DB")
                return JSON.parse(fs.readFileSync(filePath).toString()) as CardDatabaseEntry[]
            }
        }))
})

async function parseVanguardSet(set: string) {
    const value = await axios.get(set, {headers: {"User-Agent": userAgent}}).catch(reason => console.log(`Failed to get data for ${set}: ${reason}`));
    return Papa.parse<unknown & CardDatabaseEntry>(value?.data, {header: true, dynamicTyping: true, skipEmptyLines: true}).data
}

async function getCardPriceList() {
    const cards = await Promise.all(dProductIDList.map(productID => `https://tcgcsv.com/tcgplayer/16/${productID}/ProductsAndPrices.csv`).map(set => parseVanguardSet(set))).then(value1 => value1.flat());
    let blacklistedEntries = ['Starter Deck', 'Booster Box', 'Deckset', 'Trial Deck', 'Booster Pack', 'Start Deck', 'Booster Case', 'Stardust Blade Deck', 'Booster Display'];
    return cards.filter(cardInfo => !blacklistedEntries.some(name => cardInfo.name.includes(name)))
        .map(cardInfo_1 => ({name: cardInfo_1.name, cleanName: cardInfo_1.cleanName, productId: cardInfo_1.productId, groupId: cardInfo_1.groupId, url: cardInfo_1.url, lowPrice: cardInfo_1.lowPrice}));
}

// @ts-ignore
export async function GET({params, request}) {
    const cards = await cardDB;
    return new Response(JSON.stringify(cards), {status: 200});
}