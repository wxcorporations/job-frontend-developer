import React from "react";
import { XSquareFill } from "react-bootstrap-icons";

import './index.scss'

export default function modal(props:any) {
    function emitClose() {
        if (!props.close) return console.error('propr [open] é requirida!');
        props.close()
    }

    return (<>
        {
            <div className="modal">
                <header>
                    <div className="modal__btn-close" onClick={emitClose}>
                        <XSquareFill />
                    </div>
                </header>
                <main>
                    {props.children}
                </main>
                <div className="modal__back-layer" onClick={emitClose}></div>
            </div>
        }
        
    </>)
}