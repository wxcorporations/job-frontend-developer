import React from "react"
import NavigateBar from "../navgateBar"
import Link from "../link"

import useStoreFavorites from "../../hooks/useStoreFavorites"

import './MenuBar.scss'

export default function MenuBar(props: {
    children?: React.ReactNode
}) {
    return (
        <>
            <header className="menu-bar">
                <div className="container">
                    <div className="menu-bar__icon">
                        <a href="/" aria-label="link home" className="text-decoration-none">
                            <img
                                className="menu-bar__icon-img"
                                src="/assets/logo-dash.png"
                                alt="imagem de um gato com tentaculos de polvo segurando o icone do youtube"
                                height={20}
                                loading="lazy"
                            />
                        </a>
                    </div>
                    <div className="menu-bar__nav">
                        <NavigateBar></NavigateBar>
                    </div>
                </div>
            </header>
        </>
    )
}