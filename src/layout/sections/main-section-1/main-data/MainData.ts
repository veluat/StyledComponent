import mainBG from '@assets/images/section-main-1/section-1.webp'

export const MainData: MainType = {
    price: 0.24,
    currency: 'ETH',
    endingTime: '05:45:47',
    backgroundImage: mainBG,
    statistics: [
        { id: 1, title: 'Art work', value: 8.9 },
        { id: 2, title: 'Artist', value: 65 },
        { id: 3, title: 'Collection', value: 87 },
    ],
}

type StatisticsType = {
    id: number
    title: string
    value: number
}

export type MainType = {
    price: number
    currency: string
    endingTime: string
    backgroundImage: string
    statistics: StatisticsType[]
}
