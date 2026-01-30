
import React, { ReactNode } from 'react'
import './Main.scss'

interface MainProps {
    children: ReactNode
}
export default function Main({ children }: MainProps) {
    return (
        <main role='main' className="main container">
            {children}
        </main>
    )
}