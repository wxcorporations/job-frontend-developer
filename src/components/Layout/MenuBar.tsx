import React from "react"
import NavigateBar from "../NavigateBar"

import './MenuBar.scss'
import logo from '@assets/logo-dash.png'

export default function MenuBar() {
    return (
        <>
            <header className="menu-bar">
                <div className="container">
                    <div className="menu-bar__icon">
                        <a href="/" aria-label="link home" className="text-decoration-none">
                            <img
                                className="menu-bar__icon-img"
                                src={logo}
                                alt="logo da marca dash-corp"
                                loading="eager"
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