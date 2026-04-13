import type {Request, Response} from 'express';
import {Router} from 'express';
import Papa from "papaparse";
import fs from "node:fs";
import path from "node:path";
import {type DeckCard, getCardPrice} from "../../../src/util/PricingUtils.ts";

const router = Router();


function getDeckCost(req: Request<{ deck: string }>, res: Response) {
    const deck = req.params.deck;
    let deckCards = Papa.parse<DeckCard>(fs.readFileSync(path.resolve(`src/routes/deck/${deck}.csv`)).toString(), {header: true, dynamicTyping: true, skipEmptyLines: true}).data;
    let coreCards = deckCards.filter(card => card.Type === "Core");
    let corePrice = coreCards.map(value => getCardPrice(value.Name) * value.Quantity).reduce((sum, current) => sum + current, 0);
    let genericCards = deckCards.filter(card => card.Type === "Generic");
    const genericsPrice = genericCards.map(value => getCardPrice(value.Name) * value.Quantity).reduce((sum, current) => sum + current, 0);
    return res.status(200).json({
        core: Number(corePrice.toFixed(2)),
        generics: Number(genericsPrice.toFixed(2)),
        total: Number((corePrice + genericsPrice).toFixed(2)),
        breakdown: {
            core: coreCards.map(card => {
                let cardPrice = getCardPrice(card.Name);
                const {Name, Quantity} = card;
                return {name: Name, price: cardPrice, quantity: Quantity, total: cardPrice * Quantity};
            }),
            generics: genericCards.map(card => {
                let cardPrice = getCardPrice(card.Name);
                const {Name, Quantity} = card;
                return {name: Name, price: cardPrice, quantity: Quantity, total: cardPrice * Quantity};
            })
        },
        missingCards: deckCards.some(card => getCardPrice(card.Name) === 0)
    });
}


router.get('/deck/:deck', (req, res) => getDeckCost(req, res))
export default router;