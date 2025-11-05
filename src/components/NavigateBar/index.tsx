import React, { useEffect, useState } from "react"
import { ThreeDotsVertical, XSquareFill } from "react-bootstrap-icons"
import useStoreFavorites from "../../hooks/useStoreFavorites"
import Link from "../Link"

import './index.scss'

import logo from '@assets/logo-dash.png'

export default function NavigateBar(props: any) {
    const [close, setClose] = useState(true)
    const [totalFavorite, setTotalFavorite] = useState('0')
    const { list: listFavorites } = useStoreFavorites()

    const toggleClose = () => {
        setClose(!close)
    }

    const handleScrollPage = () => {
        document.body.style.overflow = close ?  'unset' : 'hidden'
    }

    useEffect(() => {
        handleScrollPage()
    }, [close])


    useEffect(() => {
        let len = listFavorites.length
       
        if (len < 9) len = `0${len}`
        if (len > 99) len = `+${len}`
        
        setTotalFavorite(len)

    }, [listFavorites])

    const getClass = () => close ? 'is-hiden' : ''

    return (
        <>
            <div className="navigate-bar">
                <nav>
                    <div className="navigate-bar__action" onClick={toggleClose}>
                        <ThreeDotsVertical />
                    </div>

                    <div className={getClass()}>
                        <div className="navigate-bar__back-layer" onClick={toggleClose}></div>

                        <div className="navigate-bar__list">

                            <div className="navigate-bar__list-close" onClick={toggleClose}>
                                <XSquareFill />
                            </div>

                            <a href="/" aria-label="link home" className="navigate-bar__icon">
                                <img
                                    className="menu-bar__icon-img"
                                    src={logo}
                                    alt="logo da marca dash-corp"
                                    height={20}
                                />
                            </a>

                            <ul className="navigate-bar__list-items">
                                <li>
                                    <Link url="/">Home</Link>
                                </li>
                                <li>
                                    <Link url="/favorites" badge={totalFavorite}>Favorites</Link>
                                </li>
                                <li>
                                    <Link url="/About">Sobre</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}