export const FooterData: FooterType = {
    menu: [
        {
            id: 1,
            title: 'Explore',
            items: ['Art Sign In', 'Collectibles', 'Domain Name', 'Utility'],
        },
        {
            id: 2,
            title: 'Statistic',
            items: ['Ranking', 'Collectibles', 'Activity'],
        },
        {
            id: 3,
            title: 'Company',
            items: ['About Us', 'Career', 'Support', 'Partners'],
        },
        {
            id: 4,
            title: 'Resources',
            items: ['Help Center', 'Platform Status', 'Blog'],
        },
    ],
    socials: [
        {id: 1, title: 'facebook', link: 'https://www.facebook.com'},
        {id: 2, title: 'telegram', link: 'https://telegram.org'},
        {id: 3, title: 'twitter', link: 'https://telegram.org'},
        {id: 4, title: 'linkedin', link: 'https://linkedin.com'},
    ],
    text: `Discover NFTs by category, track the latest drop, and and follow the collections you
  love. Enjoy it!`,
}

export type FooterSocialType = {
    id: number
    title: string
    link: string
}

export type FooterMenuType = {
    id: number
    title: string
    items: string[]
}

type FooterType = {
    menu: FooterMenuType[]
    socials: FooterSocialType[]
    text: string
}
