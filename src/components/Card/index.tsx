import React, { useCallback, useEffect, useState } from 'react';
import { HeartFill, Whatsapp } from 'react-bootstrap-icons';
import useAudio from '../../hooks/useAudio';

import './style.scss';

function Card(props: any) {
    const [active, setActive] = useState(false)
    const { sound, playSound } = useAudio()

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

        playSound(sound.Click)
    }, [active, props.favorite])

    const handlePlay = useCallback(() => {
        if (!props.play || !props.id) return console.error('attrs obrigatorios [play, id]')
        props.play(props.id)

        playSound(sound.Swipe)
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