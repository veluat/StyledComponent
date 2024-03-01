import img1 from '@assets/images/section-art-of-week-2/section-2-1.webp'
import img2 from '@assets/images/section-art-of-week-2/section-2-2.webp'
import img3 from '@assets/images/section-art-of-week-2/section-2-3.webp'

export const CardData: CardDataType[] = [
    {
        id: 1,
        title: 'Cyberpunk Cocomo',
        price: 490,
        currency: 'ETH',
        endingTime: '03:24:56',
        backgroundImage: img1,
    },
    {
        id: 2,
        title: 'Charge, Qi tiao yu',
        price: 490,
        currency: 'ETH',
        endingTime: '03:24:56',
        backgroundImage: img2,
    },
    {
        id: 3,
        title: 'Surgeon, Josh Rife',
        price: 490,
        currency: 'ETH',
        endingTime: '03:24:56',
        backgroundImage: img3,
    },
]

export type CardDataType = {
    id: number
    title: string
    price: number,
    currency: string,
    endingTime: string,
    backgroundImage: string
}

