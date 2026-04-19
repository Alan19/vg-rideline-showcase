import type {ReactNode} from "react";
import type {InferEntrySchema, RenderedContent} from "astro:content";
import type {DeckPricing} from "../prices/pricing-utils.ts";

// TODO Cleanup prop type
export function PricingCard(props: { value: { id: string; body?: string; collection: "decks"; data: InferEntrySchema<"decks">; rendered?: RenderedContent; filePath?: string; pricing?: DeckPricing }, image: ReactNode }) {
    return <article className="no-padding s12 m6 l4">
        <div className="grid no-space">
            <div className="s6">
                {props.image}
                <div className="absolute bottom left right padding bottom-shadow white-text">
                    <h6 style={{fontSize: "large"}}>{props.value.data.title}</h6>
                    <sub>{props.value.data.nation}</sub>
                </div>
            </div>
            <div className="s6">
                <div className="padding">
                    <h6>Core</h6>
                    <span>${props.value.pricing?.core.toFixed(2)}</span>
                </div>
                <hr/>
                <div className="padding">
                    <h6>Generics</h6>
                    <span>${props.value.pricing?.generics.toFixed(2)}</span>
                </div>
                <hr/>
                <div className="padding">
                    <h6 style={{display: "flex", gap: "1rem"}}>Total {props.value.pricing?.missingCards && <i className={"top"}>warning</i>}</h6>
                    <span>${props.value.pricing?.total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    </article>;
}