export type App = {
    title: string,
    icon: string,
    open: boolean,
    min: boolean,
    max: boolean,
    lock: boolean,
}

export type AppState = {
    apps: App[]
}


export type AppMainState = {
    apps : {
        apps : App[]
    }
}

export type ModifyApp = {
    payload: {
        mode: 'OPEN' | 'MIN' | 'MAX' | 'LOCK'
        app: string
        value: boolean
    }
}