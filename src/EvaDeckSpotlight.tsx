import {Avatar, Divider, Grid, Stack, Typography} from "@mui/material";
import eva from "./assets/eva.png"
import arkhite from "./assets/arkhite.png"
import eledglema from "./assets/eledglema.png"
import Chip from "@mui/material-next/Chip";

export function EvaDeckSpotlight() {
    const coreCards = [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt11/dbt11_008.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss12/dss12_029.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dpr/dpr_426.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss12/dss12_066.png",
    ]
    const generics = [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss08/dss08_021.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt02/dzbt02_095.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt06/dzbt06_020.png",
        "https://cf-vanguard.com/wordpress/wp-content/images/cardlist/DZ-BT07/dzbt07_286.png"
    ]
    const techOptions = [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss12/dss12_067.png",
    ]
    const rideline = [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt05/dbt05_072.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt05/dbt05_070.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt05/dbt05_044.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt05/dbt05_009.png"
    ]
    return (
        <Grid container spacing={3} style={{minHeight: "100vh", overflowY: "clip"}}>
            <Grid size={{md: 3}}>
                <img src={eva} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
            </Grid>
            <Grid container size={{md: 9}} style={{marginTop: 24, marginBottom: 24, paddingRight: 24}}>
                <Grid size={{md: 6}} style={{background: "var(--md-sys-color-primaryContainer)", padding: 16}}>
                    <Typography variant="h5">Ride Line</Typography>
                    <Grid container spacing={1}>
                        {rideline.map((card) => <Grid size={{md: 3}}>
                            <img src={card} style={{width: "100%"}}/>
                        </Grid>)}
                    </Grid>
                    <Divider style={{marginTop: 8, marginBottom: 8}}></Divider>
                    <Typography variant="h5">Key Cards</Typography>
                    <Grid container spacing={1}>
                        {coreCards.map((card) => <Grid size={{md: 3}}>
                            <img src={card} style={{width: "100%"}}/>
                        </Grid>)}
                    </Grid>
                </Grid>
                <Grid size={{md: 6}} style={{background: "var(--md-sys-color-secondaryContainer)", padding: 16}}>
                    <Typography variant="h5">Nation Staples (+and Regalis Piece)</Typography>
                    <Grid container spacing={1}>
                        {generics.map((card, index) => <Grid size={{md: 3}}>
                            <img src={card} style={{width: "100%"}}/>
                        </Grid>)}
                    </Grid>
                    <Typography variant="h5">Trigger and PG Lineup</Typography>
                    Prefer Fronts
                    <ul>
                        <li>3 or 4 Craggy Monster Girgrand!</li>
                        <li>Elementaria is optional!</li>
                        <li>Can use Valnout instead of Eldobreath!</li>
                    </ul>

                </Grid>
                <Grid size={{md: 3}} style={{background: "var(--md-sys-color-surfaceContainerHigh)", padding: 16}}>
                    <Typography variant="h5">Cost</Typography>
                    Imigrar expensive, Combine Rusher less expensive, everything else cheap(er)<br/>
                    [Insert gauge here, with colors separating different categories of cards]
                </Grid>
                <Grid size={{md: 3}} style={{background: "var(--md-sys-color-surfaceContainerHigh)", padding: 16}}>
                    <Typography variant="h5">Winning Image</Typography>
                    You remove non-trigger cards every turn, outlasting your opponent by calling cards from your drop zone. Your superior called "Knight of Blackness, Obscudeid" attacks with 2 critical and high power, with his power
                    increased even further by your increased trigger rate and / or high powered boosters like "Dissolving Heat Monster, Radiabilio".
                </Grid>
                <Grid size={{md: 3}} style={{background: "var(--md-sys-color-surfaceContainerHigh)", padding: 16}}>
                    <Typography variant="h5">Advantages</Typography>
                    <div style={{display: 'flex', flexWrap: "wrap", gap: 8}}>
                        <Chip label={"Deck Thinning"}/>
                        <Chip label={"High Power"}/>
                        <Chip label={"Consistent"}/>
                        <Chip label={"Flexible Guarding"}/>
                        <Chip label={"Tanky"}/>
                    </div>
                </Grid>
                <Grid size={{md: 3}} style={{background: "var(--md-sys-color-surfaceContainerHigh)", padding: 16}}>
                    <Typography variant="h5">Related Decks</Typography>
                    <Stack flexWrap={"wrap"} direction={"row"} spacing={1}>
                        <Avatar alt={"Arkhite"} src={arkhite} sx={{width: 56, height: 56}}></Avatar>
                        <Avatar alt={"Eledglema"} src={eledglema} sx={{width: 56, height: 56}}></Avatar>
                    </Stack>
                    <Divider style={{marginTop: 16, marginBottom: 8}}/>
                    <Typography variant="h5">Handy Links</Typography>
                    <a href={"https://vg-paradox.com/subpage/DeckInfo/ENG/D/EvaTops"}>VG Paradox</a>
                    <br/>
                    [Insert Gameplay videos here]
                    <br/>
                    [Insert Twitter search link here]
                </Grid>
            </Grid>
        </Grid>
    );
}