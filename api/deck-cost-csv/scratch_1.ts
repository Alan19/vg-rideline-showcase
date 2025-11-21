import fs from 'fs';
import type {PathOrFileDescriptor} from "node:fs";
import cardDB from "./cardsDB.json"
import Papa from "papaparse";

type DeckCardInfo = {
    "Name": string;
    "Quantity": number;
};

function getDeckCost(deckPath: PathOrFileDescriptor) {
    let cardPrices: [string, number][] = Papa.parse<DeckCardInfo>(fs.readFileSync(deckPath).toString(), {header: true, dynamicTyping: true, skipEmptyLines: true}).data.map(value => {
        let lowestPrice = Math.min(...cardDB.filter(card => card.name === value["Name"]).map(card => Number(card.lowPrice)));
        return [`${value.Name} x${value.Quantity}`, lowestPrice * value.Quantity];
    });
    console.log("Card Prices", cardPrices)
    console.log(`$${cardPrices.reduce((previousValue, currentValue) => previousValue + currentValue[1], 0).toFixed(2)}`)
}

getDeckCost('./Eva-core.csv');
getDeckCost('./Eva-generics.csv');
