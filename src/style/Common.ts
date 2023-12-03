import {theme} from "./Theme";

type fontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font =
    ({family, weight, color, lineHeight, Fmin, Fmax}: fontPropsType) => `
font-family: ${family || 'Inter'};
font-weight: ${weight || 500};
color: ${color || theme.colors.fontWhite};
line-height: ${lineHeight || 1.2};
font-size: calc( (100vw - 375px)/(1290 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`