import {gandeeva} from "./gandeeva.tsx";
import {rorowa} from "./rorowa.tsx";
import {orfist} from "./orfist.tsx";
import {Nation} from "./nation.tsx";

export type DeckSpotlight = {
    name: string,
    nation: Nation,
    rideLine: string[],
    keyCards: string[],
    generics: string[],
    triggers: string[],
    advantages: string[],
    vgParadoxLink: string,
    triggerNotes: { icon?: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>, text: string }[],
    gameplan: string,
    artwork: string,
    cost: {
        core: number,
        generics: number,
        triggers: number,
    },
    viability: {
        overall: 0 | 1 | 2 | 3 | 4,
        offense: 0 | 1 | 2 | 3 | 4,
        control: 0 | 1 | 2 | 3 | 4,
        value: 0 | 1 | 2 | 3 | 4
    }
}

export const decks: Record<string, DeckSpotlight> = {
    "rorowa": rorowa,
    "orfist": orfist,
    "gandeeva": gandeeva
}