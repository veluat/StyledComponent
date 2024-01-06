import mainBG from './../../../../assets/images/section-1.webp'

export const MainData: MainType = {
    price: 0.24,
    moneyType: 'ETH',
    endingTime: '03:24:56',
    backgroundImage: mainBG,
    statistics: [
        { id: 1, title: 'Art work', value: 8.9 },
        { id: 2, title: 'Artist', value: 65 },
        { id: 3, title: 'Collection', value: 87 },
    ],
}

// types
type StatisticsType = {
    id: number
    title: string
    value: number
}

export type MainType = {
    price: number
    moneyType: string
    endingTime: string
    backgroundImage: string
    statistics: StatisticsType[]
}
