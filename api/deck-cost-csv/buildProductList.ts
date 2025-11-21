import axios from "axios";
import Papa from "papaparse";
import fs from "fs";

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
    24562
]
export type Card = {
    name: string,
    cleanName: string,
    productId: number,
    groupId: number,
    url: string,
    lowPrice: number,
    midPrice: number,
    highPrice: number,
    marketPrice: number
}

export function buildProductList() {
    async function parseVanguardSet(set: string) {
        const value = await axios.get(set);
        return Papa.parse<unknown & Card>(value.data, {header: true, dynamicTyping: true, skipEmptyLines: true}).data
    }

    Promise.all(dProductIDList.map(productID => `https://tcgcsv.com/tcgplayer/16/${productID}/ProductsAndPrices.csv`)
        .map(set => parseVanguardSet(set)))
        .then(value => fs.writeFileSync("./cardsDB.json", JSON.stringify(value.flat()
            .filter(cardInfo => !['Starter Deck', 'Booster Box', 'Deckset', 'Trial Deck', 'Booster Pack', 'Start Deck', 'Booster Case', 'Stardust Blade Deck'].some(name => cardInfo.name.includes(name)))
            .map(cardInfo => ({name: cardInfo.name, cleanName: cardInfo.cleanName, productId: cardInfo.productId, groupId: cardInfo.groupId, url: cardInfo.url, lowPrice: cardInfo.lowPrice})), null, 1)))
}

buildProductList()