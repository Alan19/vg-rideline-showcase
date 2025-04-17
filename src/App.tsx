import './App.css'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {CssVarsProvider, Theme} from "@mui/material-next";
import {brandt, dragonEmpire, stoicheia} from "./nation-themes.ts";
import {AppRouter} from "./AppRouter.tsx";
import {useState} from "react";

import {Nation} from "./decks/nation.tsx";

function App() {
    const theme = createTheme({
        typography: {
            fontFamily: "Noto Sans Variable"
        }
    });
    const [selectedTheme, setSelectedTheme] = useState<Nation>(Nation.brandtGate);
    let m3Theme: Theme;
    switch (selectedTheme) {
        case Nation.stoicheia:
            m3Theme = stoicheia;
            break;
        case Nation.dragonEmpire:
            m3Theme = dragonEmpire;
            break;
        default:
            m3Theme = brandt;
    }
    return (
        <ThemeProvider theme={theme}>
            <CssVarsProvider theme={m3Theme}>
                <CssBaseline/>
                <AppRouter setSelectedTheme={setSelectedTheme}/>
            </CssVarsProvider>

        </ThemeProvider>
    )
}

export default App
