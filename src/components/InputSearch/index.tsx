import React, { useEffect, useRef } from 'react'

import './style.scss'

export default function InputSearch (props:any) {
    const inputRef = useRef<any>(null)

    const handleClick = (e:any) => {
        e.preventDefault();

        if(inputRef) props.search(inputRef.current.value);
        inputRef.current.value = ''
    }

    return (
        <>
            <div className='input-search-ref'>
                <input ref={inputRef} id="search" className='input-search-ref__input' type='text' placeholder='Busca no youtube' />
                <button className='input-search-ref__btn' onClick={handleClick}>Busca</button>
            </div>
        </>
    )
}