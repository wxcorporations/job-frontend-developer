import React, { KeyboardEvent, MouseEvent, useRef } from 'react'

import './style.scss'

interface InputSearchProps {
    onSearch: (value: string) => void
}

export default function InputSearch({ onSearch }: InputSearchProps) {
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (!inputRef.current) return null

        onSearch(inputRef.current.value);
        inputRef.current.value = ''
    }

    const handleKeyEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (!inputRef.current || event.key !== "Enter") return null
        
        onSearch(inputRef.current.value);
        inputRef.current.value = ''
    }

    const handleKeyEnterButton = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (!inputRef.current || event.key !== "Enter") return null

        onSearch(inputRef.current.value);
        inputRef.current.value = ''
    }

    return (
        <>
            <div className='input-search-ref'>
                <input ref={inputRef} id="search" className='input-search-ref__input' type='text' placeholder='Busca no youtube' onKeyDown={handleKeyEnter} />
                <button className='input-search-ref__btn' onClick={handleClick} onKeyDown={handleKeyEnterButton}>Busca</button>
            </div>
        </>
    )
}