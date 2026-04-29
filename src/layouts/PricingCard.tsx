import {getPricingNumbers, getPricingTier} from "../pricing.ts";
import type {Nation} from "../content.config.ts";
import type {ReactNode} from "react";
import type {DeckPricing} from "../types.ts";

export function PricingCard(props: Readonly<{
    children: ReactNode;
    name: string;
    nation: Nation;
    pricing: DeckPricing;
}>) {
    const {pricing, name, nation} = props;
    const {coreCardCosts, genericCardCosts, total, isAnyListingUnavailable} = getPricingNumbers(pricing);
    return <article className="no-padding s12 m6 l4">
        <div className="grid no-space" style={{height: "100%"}}>
            <div className="s6" style={{display: "flex"}}>
                {props.children}
                <div className="absolute bottom left right padding bottom-shadow white-text">
                    <h6 style={{fontSize: "large"}}>{name}</h6>
                    <div style={{display: "flex"}}>
                        <sub style={{flex: 1}}>{nation}</sub>
                        <sub>{'$'.repeat(getPricingTier(total))}</sub>
                    </div>
                </div>
            </div>
            <div className="s6" style={{display: "flex", flexDirection: "column"}}>
                <div className="padding">
                    <h6 style={{fontSize: "larger"}}>Core</h6>
                    <span>${coreCardCosts.toFixed(2)}</span>
                </div>
                <hr/>
                <div className="padding">
                    <h6 style={{fontSize: "larger"}}>Generics</h6>
                    <span>${genericCardCosts.toFixed(2)}</span>
                </div>
                <hr/>
                <div className="padding">
                    <h6 style={{display: "flex", gap: "1rem", fontSize: "larger"}}>Total {isAnyListingUnavailable && <i className={"top"}>warning</i>}</h6>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    </article>;
}