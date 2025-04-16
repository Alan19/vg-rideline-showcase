import {Star} from "@mui/icons-material";
import art from "../assets/gandeeva.png"
import {DeckSpotlight} from "./decks.tsx";
import {Nation} from "./nation.tsx";


export const gandeeva: DeckSpotlight = {
    name: "Gandeeva",
    nation: Nation.dragonEmpire,
    rideLine: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt10/dbt10_064.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt10/dbt10_062.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt10/dbt10_060.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt10/dbt10_001.png"
    ],
    keyCards: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt06/dzbt06_002.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt12/dbt12_001.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt02/dzbt02_002.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt10/dbt10_017.png"
    ],
    generics: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt06/dzbt06_022.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt06/dzbt06_045.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt11/dbt11_065.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzss01/dzss01_003.png"
    ],
    triggers: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt03/dzbt03_044.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt03/dzbt03_046.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt03/dzbt03_045.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt01/dzbt01_019.png"
    ],
    advantages: [
        "Board Wipes Every Turn",
        "Ramping Power",
        "Vanguard with Critical",
        "5 Attacks"
    ],
    vgParadoxLink: "https://vg-paradox.com/subpage/DeckInfo/ENG/D/GandeevaTops",
    triggerNotes: [
        {text: "Can use either Shield Fronts or Draw Triggers"},
        {text: "8 Critical Triggers", icon: <Star/>}
    ],
    gameplan: "Slow down your opponent and power up your rear-guards by retiring your opponent's rear guards once you hit grade 3. Attack with your vanguard which has 2 critical, as well as rear guards, all with high power!",
    artwork: art,
    cost: {
        core: 1,
        generics: 2,
        triggers: 1
    },
    viability: {
        overall: 2,
        offense: 3,
        control: 4,
        value: 1
    }
}