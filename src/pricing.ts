import fs from "node:fs";
import Papa from "papaparse";
import {cardDB} from "./pages/api/_db.json.ts";

export type DeckCard = {
    "Name": string;
    "Quantity": number;
    "Type": "Core" | "Generic",
    WhitelistedIDs?: number[]
};

export type Card = {
    name: string,
    cleanName: string,
    productId: number,
    groupId: number,
    url: string,
    lowPrice?: number,
}

export type DeckPricing = { core: number, generics: number, total: number, missingCards: boolean, };

async function getMatchingCards(name: string) {
    const regex = new RegExp(name + String.raw`\s?(\(.+\))?$`)
    return (await cardDB).filter(card => new RegExp(regex).exec(card.name));
}

export async function getCheapestListing(name: string): Promise<Card> {
    const value = await getMatchingCards(name);
    const cards: (Card & { lowPrice: number; })[] = value.filter(card => card.lowPrice) as (Card & { lowPrice: number; })[];
    if (cards.length) {
        return cards.reduce((previousValue, currentValue) => currentValue.lowPrice < previousValue.lowPrice ? currentValue : previousValue, cards[0]);
    } else {
        throw new Error(`No listings found for this ${name}!`);
    }
}

type DecklistCardPriceEntry = Card & { lowPrice: number } & DeckCard;

function isDbCard(card: DecklistCardPriceEntry | DeckCard): card is DecklistCardPriceEntry {
    return "url" in card;
}

export async function getDeckPricing(deck: string): Promise<DeckPricing> {
    let filePath = `src/content/prices/${deck}.csv`;
    if (fs.existsSync(filePath)) {
        const deckCards = Papa.parse<DeckCard>(fs.readFileSync(filePath).toString(), {header: true, dynamicTyping: true, skipEmptyLines: true}).data;
        const retrievedCards = await (Promise.all(deckCards.map(value => getCheapestListing(value.Name).then(listing => ({...listing, ...value})).catch(() => value))))
        let corePrice = retrievedCards.filter(card => card.Type === "Core")
            .filter(value => isDbCard(value))
            .map(value => value.lowPrice * value.Quantity)
            .reduce((sum, current) => sum + current, 0);
        const genericsPrice = retrievedCards.filter(card => card.Type === "Generic")
            .filter(value => isDbCard(value))
            .map(value => value.lowPrice * value.Quantity)
            .reduce((sum, current) => sum + current, 0);
        return {
            core: Number(corePrice.toFixed(2)),
            generics: Number(genericsPrice.toFixed(2)),
            total: Number((corePrice + genericsPrice).toFixed(2)),
            missingCards: retrievedCards.some(value => !isDbCard(value)),
        };
    } else {
        throw new Error(`Cannot find src/content/prices/${deck}.csv`)
    }
}

export async function getCardListPricing(cards: DeckCard[]): Promise<{ name: string, url?: string, lowPrice?: number, quantity: number }[]> {
    return Promise.all(cards.map(value => getCheapestListing(value.Name)
        .then(listing => ({name: value.Name, url: listing.url, lowPrice: listing.lowPrice, quantity: value.Quantity}))
        .catch(() => ({name: value.Name, quantity: value.Quantity}))))
}