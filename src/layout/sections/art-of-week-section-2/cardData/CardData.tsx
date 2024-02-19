import img1 from '@assets/images/art-of-week/section-2-1.webp'
import img2 from '@assets/images/art-of-week/section-2-2.webp'
import img3 from '@assets/images/art-of-week/section-2-3.webp'

export const CardData: CardDataType[] = [
    {
        id: 1,
        title: 'Cyberpunk Cocomo',
        backgroundImage: img1,
    },
    {
        id: 2,
        title: 'Charge, Qi tiao yu',
        backgroundImage: img2,
    },
    {
        id: 3,
        title: 'Surgeon, Josh Rife',
        backgroundImage: img3,
    },
]

// types
export type CardDataType = {
    id: number
    title: string
    backgroundImage: string
}

