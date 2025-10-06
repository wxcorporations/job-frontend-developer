import { useState } from 'react'
import './YoutubeEmbed.scss'

export default function Modal(props: any) {    
    return (
        <>
            <div className="Modal">
                <header>
                    <div className="modal__action">
                        {props?.close && props.close()}
                    </div>
                </header>
                <main className="modal__content">
                    {props?.main && props.main}
                </main>
                <footer>
                    {props?.footer && props.footer}
                </footer>
            </div>
        </>
    )
}
