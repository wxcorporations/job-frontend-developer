import React from "react"
import InputSearch from "../InputSearch"

import useVideo from "../../hooks/useVideo"
import useYoutubeSearch from "../../hooks/useYoutubeSearch"

import './MenuBar.scss'


export default function MenuBar(props: {
    children?: React.ReactNode
}) {
    const { searchVideos } = useYoutubeSearch()
    const { list } = useVideo()
    
    const isActive = list.length > 0

    return (
        <>
            <header className="menu-bar">
                <div className="container">
                    <div className="menu-bar__icon">
                        <img 
                            className="menu-bar__icon-img"
                            src="/assets/octocat.png"
                            alt="imagem de um gato com tentaculos de polvo segurando o icone do youtube"
                            width={30}
                            height={30} 
                        />

                        <span className="menu-bar__icon-label">OCTO-PLAY</span>
                    </div>
                    <div className="menu-bar__content">
                        {isActive && <InputSearch search={searchVideos} />}
                    </div>
                </div>
            </header>
        </>
    )
}