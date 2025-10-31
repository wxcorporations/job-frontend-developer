import React, { useCallback, useEffect, useState } from 'react';
import { HeartFill, Whatsapp } from 'react-bootstrap-icons';

import audioClick from '@assets/media/Soft_UI_Button_Click_Dry.mp3';
import audioSwipe from '@assets/media/UI_Swipe_Minimal_2.mp3';

import './style.scss';

function Card(props: any) {
    const [active, setActive] = useState(false)

    const SIZE = {
        MOBILE: [100, 84],
        DESKTOP: [123, 84]
    }

    useEffect(() => {
        setActive(props.active)
    }, [props.active])


    const toggleStatus = useCallback(() => {
        setActive(!active)
        if (props.favorite) props.favorite(!active)

        const meuAudio = new Audio(audioClick);

        meuAudio.currentTime = 0;
        meuAudio.play();
    }, [active, props.favorite])

    const handlePlay = useCallback(() => {
        if (!props.play || !props.id) return console.error('attrs obrigatorios [play, id]')
        props.play(props.id)

        const meuAudio = new Audio(audioSwipe);

        meuAudio.currentTime = 0;
        meuAudio.play();
    }, [props.play, props.id])


    return (
        <>
            <div className='card'>
                <div className='card-img' onClick={handlePlay}>
                    <img src={props.img} alt="" title={props.title || ''} width={SIZE['DESKTOP'][0]} height={SIZE['DESKTOP'][1]} />
                </div>

                <div className='card-content'>
                    <span className='card-content__channel'>{props.channel}</span>
                    <h2 className='card-content__title'>{props.title.length > 42 ? props.title.substring(0, 42) : props.title}</h2>
                </div>

                <div className='card-action'>
                    <a
                        className="card-action__shared"
                        href={`https://api.whatsapp.com/send?text=Olha esse video que tenho no Dash https://youtu.be/${props.id}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Whatsapp />
                    </a>

                    <div onClick={toggleStatus} className='card-action__favorite'>
                        <HeartFill className={active ? 'card-action__icon--active' : 'card-action__icon'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Card)