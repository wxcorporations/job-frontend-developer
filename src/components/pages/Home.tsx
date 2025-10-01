import { useState } from 'react'
import SectionPlayer from "../layout/SectionPlayer"
import InputSearch from '../InputSearch';

import './Home.scss'

export default function Home() {
    const [search, setSearch] = useState('')

    const initialTemplate = () => {
        return (
            <>
                <div className='initial-template d-flex flex-column align-items-center justify-content-center'>
                    <img className="mb-3" src="/assets/octocat.png" alt="imagem de um gato com tentaculos de polvo segurando o icone do youtube" width={196} height={196} />
                    <InputSearch search={(data: string) => (setSearch(data))}></InputSearch>
                </div>
            </>
        )
    }

    const afterSearchTemplate = () => {
        return (
            <>
                <SectionPlayer
                    videoId="yuMFUt1XVCA"
                    title="Nome do video"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit ab ea harum odio saepe fuga, nemo accusantium, assumenda officiis ipsam eveniet earum numquam? Aspernatur sunt, quibusdam at quod atque adipisci."
                />
            </>
        )
    }

    return (
        <>
            {
                !search.length ? initialTemplate() : afterSearchTemplate()
            }
        </>
    )
}


