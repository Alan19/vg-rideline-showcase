import {Avatar, Divider, Grid, Paper, Stack, Table, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import eva from "./assets/eva.png"
import arkhite from "./assets/arkhite.png"
import eledglema from "./assets/eledglema.png"
import Chip from "@mui/material-next/Chip";
import {ArrowUpward, Shield, Whatshot} from "@mui/icons-material";

export function EvaDeckSpotlight() {
    const coreCards = [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt11/dbt11_008.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss12/dss12_029.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dpr/dpr_426.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt06/dzbt06_034.png",
    ]
    const generics = [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss08/dss08_021.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt02/dzbt02_095.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt06/dzbt06_020.png",
        "https://cf-vanguard.com/wordpress/wp-content/images/cardlist/DZ-BT07/dzbt07_286.png"
    ]
    const rideline = [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt05/dbt05_072.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt05/dbt05_070.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt05/dbt05_044.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dbt05/dbt05_009.png"
    ]
    const nationCards = [
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dss05/dss05_044.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt03/dzbt03_052.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt01/dzbt01_025.png",
        "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dztd01-06/dztd03_013.png"
    ]
    return (
        <Grid container spacing={3} style={{minHeight: "100vh", overflowY: "clip", marginRight: 24}}>
            <Grid size={{md: 3}} style={{position: "relative"}}>
                <img src={eva} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                <Typography fontFamily={"Potra"} color={"var(--md-sys-color-onPrimaryContainer)"} variant={"h2"} fontWeight={"bold"} align={"center"}
                            style={{position: "absolute", bottom: 24, width: '100%', background: "var(--md-sys-color-primaryContainer)"}}>Eva</Typography>
            </Grid>
            <Grid container size={{md: 9}} style={{marginTop: 24, marginBottom: 24}}>
                <Grid size={{md: 6}} style={{background: "var(--md-sys-color-primaryContainer)"}} className={"rounded-box"}>
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
                <Grid size={{md: 6}} style={{background: "var(--md-sys-color-secondaryContainer)", display: "flex", flexDirection: "column", justifyContent: "space-between"}} className={"rounded-box"}>
                    <div>
                        <Typography variant="h5">Nation Staples (+and Regalis Piece)</Typography>
                        <Grid container spacing={1}>
                            {generics.map((card) => <Grid size={{md: 3}}>
                                <img src={card} style={{width: "100%"}}/>
                            </Grid>)}
                        </Grid>
                        <Divider style={{marginTop: 8, marginBottom: 8}}></Divider>
                        <Typography variant="h5">Trigger and PG Lineup</Typography>
                        <Grid container spacing={1}>
                            {nationCards.map((card) => <Grid size={{md: 3}}>
                                <img src={card} style={{width: "100%"}}/>
                            </Grid>)}
                        </Grid>
                    </div>
                    <div style={{display: 'flex', flexWrap: "wrap", gap: 8}}>
                        <Chip variant={"outlined"} icon={<ArrowUpward/>} label={"Prefers Shield Fronts"}/>
                        <Chip variant={"outlined"} icon={<Shield/>} label={"Does not need Elementaria Sanctitude"}/>
                        <Chip variant={"outlined"} icon={<Shield/>} label={"Needs specific Sentinel"}/>
                        <Chip variant={"outlined"} icon={<Whatshot/>} label={"Can use Valnout instead of Eldobreath"}/>
                    </div>
                </Grid>
                <Grid container size={{xs: 12}} style={{background: "var(--md-sys-color-surfaceContainerHigh)"}} className={"rounded-box"}>
                    <Grid size={{md: 3}}>
                        <Typography variant="h5">Cost</Typography>
                        <TableContainer component={Paper}>
                            <Table size={"small"}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Category</TableCell>
                                        <TableCell>Rating (💲 = ~$50, 💰 = ~$200)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableRow>
                                    <TableCell>Core</TableCell>
                                    <TableCell>💲💲💲</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Generics</TableCell>
                                    <TableCell>💲</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Triggers and PGs</TableCell>
                                    <TableCell>💲</TableCell>
                                </TableRow>
                            </Table>
                        </TableContainer>
                        <br/>
                        <Typography variant="h5">Viability</Typography>
                        <TableContainer component={Paper}>
                            <Table size={"small"}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Category</TableCell>
                                        <TableCell>Rating (Out of 4)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableRow>
                                    <TableCell>Overall</TableCell>
                                    <TableCell>✨✨✨</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Offense</TableCell>
                                    <TableCell>✨✨✨</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Control</TableCell>
                                    <TableCell>✨✨</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Value</TableCell>
                                    <TableCell>✨✨✨✨</TableCell>
                                </TableRow>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid size={{md: 3}}>
                        <Typography variant="h5">Gameplan</Typography>
                        You remove large numbers of non-trigger cards from your deck every turn, outlasting your opponent by replenishing attackers and interceptors from your drop zone. Your superior called "Knight of Blackness, Obscudeid"
                        attacks with 2 critical and high power, with his power increased even further by your increased trigger rate and high powered boosters!
                    </Grid>
                    <Grid size={{md: 3}}>
                        <Typography variant="h5">Advantages</Typography>
                        <div style={{display: 'flex', flexWrap: "wrap", gap: 8}}>
                            <Chip color={"secondary"} variant={"outlined"} label={"Deck Thinning"}/>
                            <Chip color={"secondary"} variant={"outlined"} label={"High Power"}/>
                            <Chip color={"secondary"} variant={"outlined"} label={"Consistent"}/>
                            <Chip color={"secondary"} variant={"outlined"} label={"Flexible Guarding"}/>
                            <Chip color={"secondary"} variant={"outlined"} label={"Tanky"}/>
                        </div>
                    </Grid>
                    <Grid size={{md: 3}}>
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
        </Grid>
    );
}