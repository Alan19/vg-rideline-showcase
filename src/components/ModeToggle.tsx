import ui from "beercss";
import {useStore} from "@nanostores/react";
import {currentMode} from "../mode.ts";
import {useEffect} from "react";


export function ModeToggle() {
    const $currentMode = useStore(currentMode) ?? 'auto'
    function nextMode() {
        switch ($currentMode) {
            case "auto":
                currentMode.set('light');
                break;
            case "dark":
                currentMode.set('auto');
                break;
            case "light":
                currentMode.set('dark');
                break;
        }
    }

    function getModeIcon() {
        switch ($currentMode) {
            case "auto":
                return 'auto_mode';
            case "light":
                return 'light_mode';
            case "dark":
                return 'dark_mode';
        }
    }

    useEffect(() => {
        ui('mode', $currentMode)
    }, [$currentMode])

    return (
        <div>
            <button className="circle transparent border primary-text" onClick={() => nextMode()}>
                <i id="mode-element" className={"small"}>{getModeIcon()}</i>
            </button>
        </div>
    )
}