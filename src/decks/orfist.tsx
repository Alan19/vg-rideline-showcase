import {Shield, Star} from "@mui/icons-material";
import img from "../assets/orfist.png";
import {DeckSpotlight} from "./decks.tsx";
import {Nation} from "./nation.tsx";

export const orfist: DeckSpotlight = {
    name: "Orfist",
    nation: Nation.brandtGate,
    rideLine: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss08/dss08_004.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss08/dss08_003.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss08/dss08_002.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss08/dss08_001.png"
    ],
    keyCards: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt12/dbt12_007.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss08/dss08_008.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss08/dss08_017.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt12/dbt12_025.png"
    ],
    generics: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt12/dbt12_024.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt06/dzbt06_045.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt02/dzbt02_009.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt06/dzbt06_020.png"
    ],
    triggers: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss08/dss08_013.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt03/dzbt03_051.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt01/dzbt01_021.png"
    ],
    advantages: [
        "5 Attacks",
        "Triple Drive",
        "Builds Boards",
        "Lots of Draws",
        "Deck Thinning",
        "Persona Ride on First Grade 3 Turn if you go Second",
        "High Power"
    ],
    vgParadoxLink: "",
    triggerNotes: [
        {text: "Prefers Effect Draws", icon: <Shield/>},
        {text: "8 Critical Triggers", icon: <Star/>}
    ],
    gameplan: 'Accumulate World cards in your order zone while riding up as well as through your units\' abilities, then retire them to call "Shadow Army" tokens with high power through the ability of "Cardinal Mors, Orfist Masques", while performing 3 drive checks. Your units have the ability to return World cards to your order zone after they\'ve been retired, so carefully manage the number of World cards in your order zone with the amount that you retire to ensure that you have enough for the next turn.',
    artwork: img,
    cost: {
        core: 2,
        generics: 2,
        triggers: 1
    },
    viability: {
        overall: 2,
        offense: 3,
        control: 1,
        value: 3
    }
};