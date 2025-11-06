
import React, { ReactNode } from 'react'
import './Main.scss'

interface MainProps {
    children: ReactNode
}
export default function Main({children}: MainProps) {
    return (
        <div className="main container">
            {children}
        </div>
    )
}