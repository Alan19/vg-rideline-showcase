import {atom, type PreinitializedWritableAtom, type WritableAtom} from "nanostores";
import {persistentAtom} from "@nanostores/persistent";

export type Mode = 'auto' | 'light' | 'dark';

export const currentMode: WritableAtom<Mode> = persistentAtom('auto')