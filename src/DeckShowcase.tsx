import {useParams} from "react-router";
import {Avatar, Divider, Grid, Paper, Stack, Table, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import Chip from "@mui/material-next/Chip";
import arkhite from "./assets/arkhite.png";
import eledglema from "./assets/eledglema.png";
import {decks, DeckSpotlight} from "./decks/decks.tsx";
import {Nation} from "./decks/nation.tsx";


export function DeckShowcase({setSelectedTheme}: { setSelectedTheme: React.Dispatch<React.SetStateAction<Nation>> }) {
    const {deck} = useParams();
    const {advantages, gameplan, generics, keyCards, name, rideLine, triggerNotes, triggers, vgParadoxLink, artwork, nation}: DeckSpotlight = decks[deck ?? "rorowa"];
    setSelectedTheme(nation);
    return (
        <Grid container spacing={3} style={{minHeight: "100vh", overflowY: "clip", marginRight: 24}}>
            <Grid size={{md: 3}} style={{position: "sticky", height: "100vh", top: 0}}>
                <img src={artwork} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                <Typography color={"var(--md-sys-color-onPrimaryContainer)"} variant={"h2"} fontWeight={"bold"} align={"center"} style={{
                    position: "absolute",
                    bottom: 8 * 6,
                    width: '100%',
                    background: "var(--md-sys-color-primaryContainer)"
                }}>
                    {name}
                </Typography>
            </Grid>
            <Grid container size={{md: 9}} style={{marginTop: 24, marginBottom: 24}}>
                <Grid size={{md: 6}} style={{background: "var(--md-sys-color-primaryContainer)"}} className={"rounded-box"}>
                    <Typography variant="h4" fontWeight={"bold"}>Ride Line</Typography>
                    <Grid container spacing={1}>
                        {rideLine.map((card) => <Grid size={{md: 3}}>
                            <img src={card} style={{width: "100%"}}/>
                        </Grid>)}
                    </Grid>
                    <Divider style={{marginTop: 8, marginBottom: 8}}></Divider>
                    <Typography variant="h4">Key Cards</Typography>
                    <Grid container spacing={1}>
                        {keyCards.map((card) => <Grid size={{md: 3}}>
                            <img src={card} style={{width: "100%"}}/>
                        </Grid>)}
                    </Grid>
                </Grid>
                <Grid size={{md: 6}} style={{background: "var(--md-sys-color-secondaryContainer)", display: "flex", flexDirection: "column", justifyContent: "space-between"}} className={"rounded-box"}>
                    <div>
                        <Typography variant="h4">Generic Cards</Typography>
                        <Grid container spacing={1}>
                            {generics.map((card) => <Grid size={{md: 3}}>
                                <img src={card} style={{width: "100%"}}/>
                            </Grid>)}
                        </Grid>
                        <Divider style={{marginTop: 8, marginBottom: 8}}></Divider>
                        <Typography variant="h4">Trigger and PG Lineup</Typography>
                        <Grid container spacing={1}>
                            {triggers.map((card) => <Grid size={{md: 3}}>
                                <img src={card} style={{width: "100%"}}/>
                            </Grid>)}
                        </Grid>
                    </div>
                    <div style={{display: 'flex', flexWrap: "wrap", gap: 8}}>
                        {triggerNotes.map(value => <Chip variant={"outlined"} icon={value.icon} label={value.text}/>)}
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
                        <Typography variant={"body1"}>{gameplan}</Typography>
                    </Grid>
                    <Grid size={{md: 3}}>
                        <Typography variant="h5">Advantages</Typography>
                        <div style={{display: 'flex', flexWrap: "wrap", gap: 8}}>
                            {advantages.map(value => <Chip size={"medium"} color={"secondary"} variant={"outlined"} label={value}/>)}
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
                        <a href={vgParadoxLink}>VG Paradox</a>
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