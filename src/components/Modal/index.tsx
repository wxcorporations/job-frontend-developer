import React, { ReactNode } from "react";
import { XSquareFill } from "react-bootstrap-icons";

import './index.scss'

interface ModalProps {
    onClose: () => void,
    children: ReactNode
}

export default function Modal({ children, onClose }: ModalProps) {
    function emitClose() {
        if (!onClose) return console.error('propr [onClose] é requirida!');
        onClose()
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
                    {children}
                </main>
                <div className="modal__back-layer" onClick={emitClose}></div>
            </div>
        }
        
    </>)
}