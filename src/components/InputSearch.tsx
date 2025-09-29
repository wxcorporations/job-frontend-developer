import React, { HtmlHTMLAttributes, KeyboardEvent } from 'react'
import './InputSearch.scss'
import { useRef, useEffect } from 'react'


class InputField {
    el: HTMLInputElement;

    constructor(element: HTMLInputElement) {
        this.el = element;
    }

    get value() {
        return this.el.value
    }

    clear() {
        this.el.value = ''
    }

    block() {
        this.el.disabled = true
        this.el.parentElement?.classList.add('is-disable')
    }

    active() {
        this.el.disabled = false
        this.el.parentElement?.classList.remove('is-disable')
    }
}


export default function InputSearch(props: any) {
    let input: InputField
    const search = useRef<HTMLInputElement>(null)

    useEffect(() => {
        input = new InputField(search.current!)
    }, [])

    const validateInput = () => {
        return !(!props.search || typeof props.search !== 'function')
    }

    const handleClick = () => {
        if (!validateInput()) return null

        props.search(input.value)
        input.clear()
    }

    const handleKeyEnter = (event: any) => {
        if (!validateInput()) return null

        if (event.key === 'Enter') {
            props.search(input.value)
            input.clear()
        }
    }

    const handleKeyEnterButton = (event: any) => {
        if (!validateInput()) return null

        if (event.key === 'Enter') {
            props.search(input.value)
            input.clear()
        }
    }

    return (
        <>
            <div className='field-search' >
                <input tabIndex={1} id="input-search" ref={search} className="field-search__input" placeholder='[ enter ] Para buscar' type="text" onKeyDown={handleKeyEnter} />
                <div className="field-search__button" role="button" aria-details='button search' tabIndex={2} onClick={handleClick} onKeyDown={handleKeyEnterButton}>
                    <i className="bi bi-search"></i>
                </div>
            </div>
        </>
    )
}