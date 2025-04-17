import {Grass, Shield, Whatshot} from "@mui/icons-material";
import {DeckSpotlight} from "./decks.tsx";
import {Nation} from "./nation.tsx";

export const rorowa: DeckSpotlight = {
    name: "Rorowa",
    nation: Nation.stoicheia,
    rideLine: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt05/dbt05_090.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt05/dbt05_088.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt05/dbt05_053.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt06/dzbt06_017.png"
    ],
    keyCards: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss12/dss12_008.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt08/dbt08_t01.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss12/dss12_122.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss12/dss12_004.png"
    ],
    generics: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dpr/dpr_401.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt01/dzbt01_014.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt08/dbt08_t02.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt06/dzbt06_020.png"
    ],
    triggers: [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt03/dzbt03_056.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt03/dzbt03_057.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt01/dzbt01_025.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt01/dzbt01_023.png",
    ],
    vgParadoxLink: "https://vg-paradox.com/subpage/DeckInfo/ENG/D/RorowaTops",
    advantages: [
        "Early Game Aggression",
        "Trigger Doubler",
        "Trigger Tripler",
        "Flexible Guarding",
        "Plant Tokens",
        "Retire Rear-Guards",
        "Send Rear-Guards to the Bottom of the Deck",
        "4-5 Attacks"
    ],
    gameplan: 'Generate "Plant" tokens in the early game, then attack 4 times using the skills of "Dragritter Girl of Flame Blossoms, Radylina", and your "Momokke" token. Once your vanguard is grade 3 or greater, use "Crossing Interdimensional Thoughts, Rorowa"\'s ability to create "Plant" tokens, search for units from your deck or send your opponent\'s rear-guards to the bottom of the deck, while playing "Resolute Pair of Eyes" to power up your token units. You can also evolve your "Momokke" token into "Shell-breaking Wings, Momokke" to retire your opponent\'s rear-guards, and attack 5 times with the ability of "Undoubting Flame Sword, Radylina"!',
    triggerNotes: [
        {text: "Can use Valnout instead of Blessfavor", icon: <Whatshot/>},
        {text: "Prefers Effect Draw Triggers", icon: <Shield/>},
        {icon: <Grass/>, text: "Have 4-5 Plant tokens ready when playing the deck"}
    ],
    artwork: "https://story.cf-vanguard.com/wordpress/wp-content/uploads/2024/11/05205100/rorowa-768x998.png",
    cost: {
        core: 1,
        generics: 3,
        triggers: 1
    },
    viability: {
        overall: 2,
        offense: 3,
        control: 2,
        value: 2
    }
};