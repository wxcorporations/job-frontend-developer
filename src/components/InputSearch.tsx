import { useState, useRef } from 'react'

import './InputSearch.scss'

export default function InputSearch(props: { search: Function }) {
    const [value, setValue] = useState('ddddd')

    const input = useRef<any>(null)

    const updateValue = (event: any) => setValue(event.target.value)


    const inputClear = () => {
        input && (input.current.value = '')
    }

    const handleClick = () => {
        props.search(value)
        inputClear()
    }

    const handleKeyEnter = (event: any) => {
        if (event.key === 'Enter') {
            props.search(event.target.value)
            inputClear()
        }
    }

    const handleKeyEnterButton = (event: any) => {
        if (event.key === 'Enter') {
            props.search(value)
            inputClear()
        }
    }

    return (
        <>
            <div className="field-search" >
                <input
                    ref={input}
                    type="text"
                    tabIndex={1}
                    id="input-search"
                    className="field-search__input"
                    placeholder="[ enter ] Para buscar"
                    onKeyDown={handleKeyEnter}
                    onBlur={updateValue}
                />

                <div
                    tabIndex={2}
                    role="button"
                    aria-details="button search"
                    className="field-search__button"
                    onKeyDown={handleKeyEnterButton}
                    onClick={handleClick}
                >
                    <i className="bi bi-search"></i>
                </div>
            </div>
        </>
    )
}