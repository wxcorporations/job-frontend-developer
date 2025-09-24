import React from "react"
import './MenuBar.scss'

type props = {
    children: React.ReactNode
}

export default function MenuBar(props: props) {
    return (
        <>
            <header className="menu-bar">
                <div className="container">
                    <div className="menu-bar__icon">
                        <img src="" alt="" width={100} height={50}/>
                    </div>
                    <div className="menu-bar__content">
                        {props.children}
                    </div>
                </div>
            </header>
        </>
    )
}