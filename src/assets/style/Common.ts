import {theme} from "./Theme";

export const font =
    ({family, weight, color, lineHeight, Fmin, Fmax}: fontPropsType) => `
font-family: ${family || 'Inter'};
font-weight: ${weight || 400};
color: ${color || theme.colors.fontWhite};
line-height: ${lineHeight || 1.6};
font-size: clamp(${Fmin}px, calc( (100vw - 375px) / (1512 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
`

type fontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}