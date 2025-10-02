import { useDispatch, useSelector } from 'react-redux';
import { setSearch, updateVideos } from '../../../store/videoSlice'
import SectionPlayer from "../layout/SectionPlayer"
import InputSearch from '../InputSearch';
import { useState } from 'react'
import Youtube from '../../api/Youtube';

import './Home.scss'




export default function Home() {
    const youtubeApi = new Youtube()
    const [initial, setInitial] = useState(true)

    const dispatch = useDispatch()

    const updateSearch = (value: any) => {
        console.log('busca ========> ', value)
        sendSearch(value)
        // dispatch(setSearch(value))
        // sendSearch()
        // setInitial(false)
    }

    // apos enviar a busca
    // - validar se a busca não esta em branco 
    // - verificar se a busca possui muitos caracteres 

    // - realizar requisiçao na api
    // - armazenar resposta na store
    // - renderizar outra pagina.
    // template secndario como os dados carregados.

    const validateQuery = (value: string) => {
        const len = value.length
        return (len !== 0 && len < 120)
    }

    const sendSearch = async (query: string) => {
        try {
            if (!validateQuery(query)) return false

            const res = await youtubeApi.search(query)

            console.log(res)

            if ('error' in res) {
                return console.error(res.message)
            }
            
            dispatch(updateVideos(res.items))
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
                    <InputSearch search={updateSearch}></InputSearch>
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


