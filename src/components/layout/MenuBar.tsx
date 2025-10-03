import React from "react"
import InputSearch from "../InputSearch"

import useVideo from "../../hooks/useVideo"

import './MenuBar.scss'

type props = {
    children?: React.ReactNode
}

export default function MenuBar(props: props) {
    const { setPlayer, list } = useVideo()
    const isActive = list.length > 0

    return (
        <>
            <header className="menu-bar">
                <div className="container">
                    <div className="menu-bar__icon">
                        <img className="menu-bar__icon-img" src="/assets/octocat.png" alt="imagem de um gato com tentaculos de polvo segurando o icone do youtube" width={30} height={30} />
                        <span className="menu-bar__icon-label">OCTO-PLAY</span>
                    </div>
                    <div className="menu-bar__content">
                        {isActive && <InputSearch search={setPlayer} />}
                    </div>
                </div>
            </header>
        </>
    )
}