import { ReactElement } from "react"

export type WindowProps = {
    title: string
    classes: string
    width: string
    height: string
    min: boolean
    max: boolean
    app: string
    children: ReactElement,
}   

export type mode = "MAX" | "MIN" | "OPEN" | "LOCK";