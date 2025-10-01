import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../../store/videoSlice'
import SectionPlayer from "../layout/SectionPlayer"
import InputSearch from '../InputSearch';
import { useState } from 'react'

import './Home.scss'

export default function Home() {
    const search = useSelector((data:any) => data.video.search)
    const dispatch = useDispatch()

    const initialTemplate = () => {
        return (
            <>
                <div className='initial-template d-flex flex-column align-items-center justify-content-center'>
                    <img className="mb-3" src="/assets/octocat.png" alt="imagem de um gato com tentaculos de polvo segurando o icone do youtube" width={196} height={196} />
                    <InputSearch search={(data: string) => (dispatch(setSearch(data)) )}></InputSearch>
                </div>
            </>
        )
    }

    const afterSearchTemplate = () => {
        return (
            <>
                <SectionPlayer />
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


