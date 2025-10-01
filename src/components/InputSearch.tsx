import { useRef, useEffect } from 'react'
import './InputSearch.scss'

type ImputSearchProps = {
    search: Function
}

export default function InputSearch(props: ImputSearchProps) {
    let input: InputField
    const searchElement = useRef<HTMLInputElement>(null)

    useEffect(() => {
        input = new InputField(searchElement.current!)
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
                <input tabIndex={1} id="input-search" ref={searchElement} className="field-search__input" placeholder='[ enter ] Para buscar' type="text" onKeyDown={handleKeyEnter} />
                <div className="field-search__button" role="button" aria-details='button search' tabIndex={2} onClick={handleClick} onKeyDown={handleKeyEnterButton}>
                    <i className="bi bi-search"></i>
                </div>
            </div>
        </>
    )
}

const CSS_DISABLE_CLASS = 'is-disable';

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
        this.el.parentElement?.classList.add(CSS_DISABLE_CLASS)
    }

    active() {
        this.el.disabled = false
        this.el.parentElement?.classList.remove(CSS_DISABLE_CLASS)
    }
}