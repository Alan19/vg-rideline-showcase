import {DeckSpotlight} from "./decks.tsx";
import {Nation} from "./nation.tsx";
import {Shield, Whatshot} from "@mui/icons-material";
import img from "../assets/eva.png";

export const eva: DeckSpotlight = {
    name: "Eva",
    nation: Nation.brandtGate,
    rideLine: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt05/dbt05_072.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt05/dbt05_070.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt05/dbt05_044.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt05/dbt05_009.png"
    ],
    keyCards: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt11/dbt11_008.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss12/dss12_029.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dpr/dpr_426.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt06/dzbt06_034.png",
    ],
    generics: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss08/dss08_021.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt02/dzbt02_095.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt06/dzbt06_020.png",
        "https://cf-vanguard.com/wordpress/wp-content/images/cardlist/DZ-BT07/dzbt07_286.png"
    ],
    triggers: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss05/dss05_044.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt03/dzbt03_052.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt01/dzbt01_025.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dztd01-06/dztd03_013.png"
    ],
    advantages: [
        "Deck Thinning",
        "Good Early Game",
        "High Powered Attacks",
        "Rear-guards with Critical",
        "Flexible Guarding",
        "Consistent",
        "Tanky"
    ],
    vgParadoxLink: "https://vg-paradox.com/subpage/DeckInfo/ENG/D/EvaTops",
    triggerNotes: [
        {text: "Prefers Shield Fronts", icon: <Shield/>},
        {text: "Does not need Elementaria Sanctitude", icon: <Shield/>},
        {text: "Needs specific Sentinel", icon: <Shield/>},
        {text: "Can use Valnout instead of Eldobreath", icon: <Whatshot/>}
    ],
    gameplan: 'Remove non-trigger cards from your deck every turn, and outlast your opponent by replenishing attackers and interceptors from your drop zone. Your superior called "Knight of Blackness, Obscudeid" attacks with 2 critical and high power, with his power increased even further by your increased trigger rate and high powered boosters!',
    artwork: img,
    cost: {
        core: 3,
        generics: 1,
        triggers: 1
    },
    viability: {
        overall: 3,
        offense: 2,
        control: 3,
        value: 4
    }
};