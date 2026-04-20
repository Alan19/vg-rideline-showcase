import type {DeckPricing} from "../prices/pricing-utils.ts";
import type {Nation} from "../content.config.ts";
import type {ReactNode} from "react";

export function PricingCard(props: Readonly<{
    children: ReactNode;
    name: string;
    nation: Nation;
    pricing: DeckPricing;
}>) {
    const {pricing, name, nation} = props;
    const {generics, core, total, missingCards} = pricing;
    return <article className="no-padding s12 m6 l4">
        <div className="grid no-space">
            <div className="s6" style={{display: "flex"}}>
                {props.children}
                <div className="absolute bottom left right padding bottom-shadow white-text">
                    <h6 style={{fontSize: "large"}}>{name}</h6>
                    <sub>{nation}</sub>
                </div>
            </div>
            <div className="s6" style={{display: "flex", flexDirection: "column"}}>
                <div className="padding">
                    <h6 style={{fontSize: "larger"}}>Core</h6>
                    <span>${core.toFixed(2)}</span>
                </div>
                <hr/>
                <div className="padding">
                    <h6 style={{fontSize: "larger"}}>Generics</h6>
                    <span>${generics.toFixed(2)}</span>
                </div>
                <hr/>
                <div className="padding">
                    <h6 style={{display: "flex", gap: "1rem", fontSize: "larger"}}>Total {missingCards && <i className={"top"}>warning</i>}</h6>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    </article>;
}