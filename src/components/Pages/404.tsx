import React from 'react'
import './404.scss'

import error_404 from '@assets/404.png'

export default function Page404 (props:any) {
    return (
        <>
            <div className="page-error-404">
                <img className='page-error-404__img' src={error_404} alt="" />
            </div>
        </>
    )
}