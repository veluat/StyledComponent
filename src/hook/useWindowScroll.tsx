import {useEffect, useState} from "react";

export const useWindowScroll = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 204 ? setIsScrolled(true) : setIsScrolled(false)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return isScrolled
}