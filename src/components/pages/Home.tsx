import { useState } from 'react'

import SectionPlayer from "../layout/SectionPlayer"
import InputSearch from '../InputSearch';

import useYoutubeSearch from '../../hooks/useYoutubeSearch';
import Youtube from '../../api/Youtube';

import './Home.scss'

export default function Home() {
    const [initial, setInitial] = useState(true)
    const { searchVideos } = useYoutubeSearch()

    const handleSearch = async (query:string) => {
        try {
            await searchVideos(query)
            setInitial(false)
            
        } catch (error) {
            console.error(error)
        }
    }

    const initialTemplate = () => {
        return (
            <>
                <div className='initial-template d-flex flex-column align-items-center justify-content-center'>
                    <img className="mb-3" src="/assets/octocat.png" alt="imagem de um gato com tentaculos de polvo segurando o icone do youtube" width={196} height={196} />
                    <InputSearch search={handleSearch}></InputSearch>
                </div>
            </>
        )
    }

    return (
        <>
            {
                initial ? initialTemplate() : <SectionPlayer />
            }
        </>
    )
}


