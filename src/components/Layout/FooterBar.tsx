import React, { ReactNode } from 'react'
import './FooterBar.scss'

interface FooterBarProps {
    children: ReactNode
}
export default function FooterBar({ children }: FooterBarProps) {
    return (
        <>
            <div className="footer-bar">
                <div className="container">
                    <div className="d-flex mb-2 p-3">
                        <a
                            className="w-100 text-center font-weight-lighter text-decoration-none text-secondary"
                            href="https://www.linkedin.com/in/fernando-barros-dev/"
                            target="_blank" rel="noreferrer"
                        >
                            Fernando Barros
                        </a>
                    </div>

                    {children}
                </div>
            </div>
        </>
    )
}