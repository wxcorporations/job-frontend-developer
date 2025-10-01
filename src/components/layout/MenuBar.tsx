import React from "react"
import './MenuBar.scss'

type props = {
    children?: React.ReactNode
}

export default function MenuBar(props: props) {
    return (
        <>
            <header className="menu-bar">
                <div className="container">
                    <div className="menu-bar__icon">
                        <img className="menu-bar__icon-img" src="/assets/octocat.png" alt="imagem de um gato com tentaculos de polvo segurando o icone do youtube" width={30} height={30} />
                        <span className="menu-bar__icon-label">OCTO-PLAY</span>
                    </div>
                    <div className="menu-bar__content">
                        {props.children && props.children}
                    </div>
                </div>
            </header>
        </>
    )
}