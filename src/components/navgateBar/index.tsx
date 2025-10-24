import React, { useEffect, useState } from "react"
import { ThreeDotsVertical, XSquareFill } from "react-bootstrap-icons"
import useStoreFavorites from "../../hooks/useStoreFavorites"
import Link from "../link"

import './index.scss'

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
        const len = listFavorites.length

        if (len < 9) {
            setTotalFavorite(`0${len}`)
        }
        
        if (len > 99) {
            setTotalFavorite(`+${len}`)
        }

        handleScrollPage()
        
    }, [close, listFavorites])

    const getClass = () => close ? 'is-hiden' : ''

    return (
        <>
            <div className="navigate-bar">
                <nav>
                    <div className="navigate-bar__action" onClick={toggleClose}>
                        <ThreeDotsVertical />
                    </div>

                    <div className={getClass()} >
                        <div className="navigate-bar__back-layer" onClick={toggleClose}></div>

                        <div className="navigate-bar__list">

                            <div className="navigate-bar__list-close" onClick={toggleClose}>
                                <XSquareFill />
                            </div>

                            <a href="/" aria-label="link home" className="navigate-bar__icon">
                                <img
                                    className="menu-bar__icon-img"
                                    src="/assets/logo-dash.png"
                                    alt="imagem de um gato com tentaculos de polvo segurando o icone do youtube"
                                    height={20}
                                    loading="lazy"
                                />
                            </a>

                            <ul className="navigate-bar__list-items">
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