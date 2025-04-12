import './App.css'
import {CssBaseline} from "@mui/material";
import {EvaDeckSpotlight} from './EvaDeckSpotlight';
import {CssVarsProvider} from "@mui/material-next";
import {flux} from "./nation-themes.ts";

function App() {
    return (
        <CssVarsProvider theme={flux}>
            <CssBaseline/>
            <EvaDeckSpotlight/>
        </CssVarsProvider>
    )
}

export default App
