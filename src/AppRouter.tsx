import {Route, Routes} from "react-router";
import {DeckShowcase} from "./DeckShowcase.tsx";
import {MainMenu} from "./MainMenu.tsx";

import {Nation} from "./decks/nation.tsx";

export function AppRouter(props: { setSelectedTheme: React.Dispatch<React.SetStateAction<Nation>> }) {
    return <Routes>
        <Route path={"/"} element={<MainMenu/>}/>
        <Route path="decks">
            <Route path={":deck"} element={<DeckShowcase setSelectedTheme={props.setSelectedTheme}/>}/>
        </Route>
    </Routes>
}