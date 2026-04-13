import {getCollection} from "astro:content";
import {type DeckCard, getCardPrice} from "../../api/src/routes/deckRoutes.ts";
import Papa from "papaparse";
import fs from "node:fs";

const getCostBreakdown = (coreCards: DeckCard[], genericCards: DeckCard[]) => {
    return {
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
    };
}

type DeckPricing = { core: number, generics: number, total: number, missingCards: boolean };

export function getDeckCost2(deck: string): DeckPricing | undefined {
    let filePath = `api/src/routes/deck/${deck}.csv`;
    if (fs.existsSync(filePath)) {
        let deckCards = Papa.parse<DeckCard>(fs.readFileSync(filePath).toString(), {header: true, dynamicTyping: true, skipEmptyLines: true}).data;
        let coreCards = deckCards.filter(card => card.Type === "Core");
        let corePrice = coreCards.map(value => getCardPrice(value.Name) * value.Quantity).reduce((sum, current) => sum + current, 0);
        let genericCards = deckCards.filter(card => card.Type === "Generic");
        const genericsPrice = genericCards.map(value => getCardPrice(value.Name) * value.Quantity).reduce((sum, current) => sum + current, 0);
        return {
            core: Number(corePrice.toFixed(2)),
            generics: Number(genericsPrice.toFixed(2)),
            total: Number((corePrice + genericsPrice).toFixed(2)),
            missingCards: deckCards.some(card => getCardPrice(card.Name) === 0)
        };
    } else {
        return undefined;
    }
}

export async function Prices() {
    const allDecks = await getCollection('decks');

    return (
        <div className={"grid"}>
            {allDecks.map(value => ({...value, pricing: getDeckCost2(value.id.split('/').at(-1) as string)}))
                .filter(value => value.pricing)
                .map(value =>
                    <article className="no-padding s12 l4">
                        <div className="grid no-space">
                            <div className="s6">
                                <img className="responsive" src={value.data["card-art"].src}/>
                                <div className="absolute bottom left right padding bottom-shadow white-text">
                                    <h5>{value.data.title}</h5>
                                    <p>{value.data.nation}</p>
                                </div>
                            </div>
                            <div className="s6">
                                <div className="padding">
                                    <h5>Core</h5>
                                    <span>${value.pricing?.core.toFixed(2)}</span>
                                </div>
                                <hr />
                                <div className="padding">
                                    <h5>Generics</h5>
                                    <span>${value.pricing?.generics.toFixed(2)}</span>
                                </div>
                                <hr />
                                <div className="padding">
                                    <h5>Total {value.pricing?.missingCards && <i>warning</i>}</h5>
                                    <span>${value.pricing?.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </article>
                )
            }
        </div>
    )
}