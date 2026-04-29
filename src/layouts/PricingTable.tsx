import {getPricingNumbers} from "../pricing.ts";
import type {DeckCardPricing, DeckPricing} from "../types.ts";

function CardPricingRow(props: Readonly<{ cardPricingEntry: DeckCardPricing }>) {
    const {lowPrice, name, url, quantity} = props.cardPricingEntry;
    return <tr>
        <td><a className={"link"} href={url} target="_blank" rel="noopener noreferrer">{name}</a></td>
        <td className="right-align">{lowPrice ? `$${(lowPrice).toFixed(2)}` : <i>warning</i>}</td>
        <td className="right-align">{quantity}</td>
        <td className="right-align">{lowPrice ? `$${(lowPrice * quantity).toFixed(2)}` : <i>warning</i>}</td>
    </tr>;
}

export function PricingTable(props: Readonly<{ deckPricing: DeckPricing, title: string }>) {
    const {title, deckPricing} = props;
    const {coreCardCosts, genericCardCosts, coreCardCount, genericCardCount} = getPricingNumbers(deckPricing);
    return <div className="surface">
        <h5 className={"secondary-text"}>{title} Cost Breakdown</h5>
        <table className="border">
            <thead>
            <tr>
                <th>Name</th>
                <th className="right-align">Price</th>
                <th className="right-align">Quantity</th>
                <th className="right-align">Total</th>
            </tr>
            </thead>
            <tbody>
            <tr className="primary-container">
                <th>Core Cards</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            {deckPricing.core.map(value => <CardPricingRow key={value.name} cardPricingEntry={value}/>)}
            <tr>
                <th scope={"row"}>Core Cards Total</th>
                <th></th>
                <th className={"right-align"}>{coreCardCount}</th>
                <th className={"right-align"}>${coreCardCosts.toFixed(2)}</th>
            </tr>
            {!!(deckPricing.generics.length) && <>
                <tr className="primary-container">
                    <th>Generic Cards</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                {deckPricing.generics.map(value => <CardPricingRow key={value.name} cardPricingEntry={value}/>)}
                <tr>
                    <th scope={"row"}>Generic Cards Total</th>
                    <th></th>
                    <th className={"right-align"}>{genericCardCount}</th>
                    <th className={"right-align"}>${genericCardCosts.toFixed(2)}</th>
                </tr>
            </>}
            </tbody>
            <tfoot className={"tertiary-container"}>
            <tr>
                <th scope={"row"}>Deck Total (Excluding Triggers and Sentinels)</th>
                <th></th>
                <th className={"right-align"}>{coreCardCount + genericCardCount}</th>
                <th className={"right-align"}>${(coreCardCosts + genericCardCosts).toFixed(2)}</th>
            </tr>
            </tfoot>
        </table>
    </div>
}