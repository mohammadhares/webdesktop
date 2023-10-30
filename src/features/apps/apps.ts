import {
    application,
    calculator,
    deckpunchLogo,
    note,
    profile,
    setting,
    Logs,
    pataka,
} from "../../assets/icons";
import { App } from "./app.types";

export const AppsList: App[] = [
    {
        title: "APPLICATIONS",
        icon: application,
        open: false,
        min: false,
        max: false,
        lock: false,
    },
    {
        title: "DECKPUNCH",
        icon: deckpunchLogo,
        open: false,
        min: false,
        max: false,
        lock: false,
    },
    {
        title: "CALCULATOR",
        icon: calculator,
        open: false,
        min: false,
        max: false,
        lock: false,
    },
    {
        title: "PATAKA",
        icon: pataka,
        open: false,
        min: false,
        max: false,
        lock: false,
    },
    {
        title: "LOGS",
        icon: Logs,
        open: false,
        min: false,
        max: false,
        lock: false,
    },
    {
        title: "NOTE",
        icon: note,
        open: false,
        min: false,
        max: false,
        lock: false,
    },
    {
        title: "AGENTS",
        icon: profile,
        open: false,
        min: false,
        max: false,
        lock: false,
    },
    {
        title: "SYSTEM_SETTINGS",
        icon: setting,
        open: false,
        min: false,
        max: false,
        lock: false,
    }
];
