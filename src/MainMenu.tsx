import {Container, Grid, Stack, Typography} from "@mui/material";
import {decks} from "./decks/decks.tsx";
import {Link} from "react-router";
import {Nation} from "./decks/nation.tsx";

export function MainMenu() {
    return (
        <Container style={{minHeight: "100vh"}}>
            <Typography>Welcome to this Vanguard deck showcase site!</Typography>
            <Stack spacing={2}>
                {Object.values(Nation).map(nation =>
                    <>
                        <Typography variant={"h4"} fontWeight={"bold"}>{nation}</Typography>
                        <Grid container spacing={2}>
                            {Object.entries(decks)
                                .filter(([, value]) => value.nation === nation)
                                .map(([link, deck]) => <Grid size={{md: 2, xs: 6}} style={{height: 300}}>
                                    <Link to={{pathname: `/decks/${link}`}} style={{position: "relative"}}>
                                        <img alt={link} src={deck.artwork} style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "2rem 0 2rem 0"}}/>
                                        <Typography color={"var(--md-sys-color-onPrimaryContainer)"} variant={"h6"} fontWeight={"bold"} align={"center"} style={{
                                            position: "absolute",
                                            bottom: 48,
                                            width: '100%',
                                            background: "var(--md-sys-color-primaryContainer)"
                                        }}>
                                            {deck.name}
                                        </Typography>
                                    </Link>
                                </Grid>)}
                        </Grid>
                    </>
                )}
            </Stack>

        </Container>
    );
}