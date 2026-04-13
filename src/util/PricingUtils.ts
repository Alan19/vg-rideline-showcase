import fs from "node:fs";
import Papa from "papaparse";
import type {Card} from "../../api/src/deck-cost-csv/card.ts";

export type DeckCard = {
    "Name": string;
    "Quantity": number;
    "Type": "Core" | "Generic"
};

export function getCardPrice(name: string, cardDB: Card[]): number {
    let matchedCards = cardDB.filter(card => card.name === name).map(card => Number(card.lowPrice));
    return matchedCards.length === 0 ? 0 : Math.min(...matchedCards.filter(Boolean));
}

function getCostBreakdown(coreCards: DeckCard[], genericCards: DeckCard[], cardDB: Card[]) {
    return {
        core: coreCards.map(card => {
            let cardPrice = getCardPrice(card.Name, cardDB);
            const {Name, Quantity} = card;
            return {name: Name, price: cardPrice, quantity: Quantity, total: cardPrice * Quantity};
        }),
        generics: genericCards.map(card => {
            let cardPrice = getCardPrice(card.Name, cardDB);
            const {Name, Quantity} = card;
            return {name: Name, price: cardPrice, quantity: Quantity, total: cardPrice * Quantity};
        })
    };
}

type DeckPricing = { core: number, generics: number, total: number, missingCards: boolean };

export function getDeckPrices(deck: string, cardDB: Card[]): DeckPricing | undefined {
    let filePath = `api/src/routes/deck/${deck}.csv`;
    if (fs.existsSync(filePath)) {
        let deckCards = Papa.parse<DeckCard>(fs.readFileSync(filePath).toString(), {header: true, dynamicTyping: true, skipEmptyLines: true}).data;
        let coreCards = deckCards.filter(card => card.Type === "Core");
        let corePrice = coreCards.map(value => getCardPrice(value.Name, cardDB) * value.Quantity).reduce((sum, current) => sum + current, 0);
        let genericCards = deckCards.filter(card => card.Type === "Generic");
        const genericsPrice = genericCards.map(value => getCardPrice(value.Name, cardDB) * value.Quantity).reduce((sum, current) => sum + current, 0);
        return {
            core: Number(corePrice.toFixed(2)),
            generics: Number(genericsPrice.toFixed(2)),
            total: Number((corePrice + genericsPrice).toFixed(2)),
            missingCards: deckCards.some(card => getCardPrice(card.Name, cardDB) === 0)
        };
    } else {
        return undefined;
    }
}