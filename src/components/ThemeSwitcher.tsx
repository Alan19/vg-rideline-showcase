import ui from "beercss";
import type {Nation} from "../content.config.ts";

export function ThemeSwitcher({nation}: Readonly<{ nation?: Nation, 'client:only': string }>) {
    switch (nation) {
        case "Brandt Gate":
            ui("theme", "#abb3bf");
            break;
        case "Dragon Empire":
            ui("theme", "#c50017")
            break;
        case "Dark States":
            ui("theme", "#062c88")
            break;
        case "Stoicheia":
            ui("theme", "#007c36");
            break;
        case "Lyrical Monasterio":
            ui("theme", "#eb6c99");
            break;
        case "Keter Sanctuary":
            ui("theme", "#fcc600");
            break;
        default:
            ui("theme", "#039fec");
            break;
    }
    return <></>
}