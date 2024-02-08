import img1 from '@assets/images/pop-artists/section-4-1.webp'
import img2 from '@assets/images/pop-artists/section-4-2.webp'
import img3 from '@assets/images/pop-artists/section-4-3.webp'
import img4 from '@assets/images/pop-artists/section-4-4.webp'
import img5 from '@assets/images/pop-artists/section-4-5.webp'
import ava1 from '@assets/images/pop-artists/ava-1.svg'
import ava2 from '@assets/images/pop-artists/ava-2.svg'
import ava3 from '@assets/images/pop-artists/ava-3.svg'
import ava4 from '@assets/images/pop-artists/ava-4.svg'
import ava5 from '@assets/images/pop-artists/ava-5.svg'

const PopData: PopType[] = [
    {
        id: 1,
        userName: 'Osvaldo Percy',
        avatar: ava1,
        bg: img1,
        width: '343px',
        height: '311px'
    },
    {
        id: 2,
        userName: 'Ranson Sqiure',
        avatar: ava2,
        bg: img2,
        width: '520px',
        height: '311px'
    },
    {
        id: 3,
        userName: 'Sebastian waltan',
        avatar: ava3,
        bg: img3,
        width: '410px',
        height: '311px'
    },
    {
        id: 4,
        userName: 'Abraham Zack',
        avatar: ava4,
        bg: img4,
        width: '410px',
        height: '311px'
    },
    {
        id: 5,
        userName: 'Cristio leo',
        avatar: ava5,
        bg: img5,
        width: '410px',
        height: '652px'
    },
]

//types
export type PopType = {
    id: number
    userName: string
    avatar: string
    bg: string
    width: string
    height: string
}

export default PopData;