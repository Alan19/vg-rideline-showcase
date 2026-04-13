import {getCollection} from "astro:content";
import {getDeckPrices} from "../util/PricingUtils.ts";
import type {Card} from "../../api/src/deck-cost-csv/card.ts";

export async function Prices(props: Readonly<{ data: Card[] }>) {
    const allDecks = await getCollection('decks');
    return (
        <div className={"grid"}>
            {allDecks.map(value => ({...value, pricing: getDeckPrices(value.id.split('/').at(-1) as string, props.data)}))
                .filter(value => value.pricing)
                .map(value => <article className="no-padding s12 l4" key={value.id}>
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
                                <hr/>
                                <div className="padding">
                                    <h5>Generics</h5>
                                    <span>${value.pricing?.generics.toFixed(2)}</span>
                                </div>
                                <hr/>
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