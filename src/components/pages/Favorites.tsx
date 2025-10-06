import { useEffect, useMemo } from "react";

import useStoreMenuBar from "../../hooks/useStoreMenuBar";
import useStoreFavorites from "../../hooks/useStoreFavorites";

import CardVideo from "../CardVideo";


export default function Favorites(props: any) {
    const { switchSearch } = useStoreMenuBar()
    const { list, addFavorite, removeFavorite } = useStoreFavorites()

    useEffect(() => {
        switchSearch(false)
    }, [])


    const toggleFavorite = (data: any) => {
        data.status ? (addFavorite(data)) : (removeFavorite(data))
    }

    const cards = useMemo(() => {
        return list.length
            ? list.map((data: any, index: number) => {
                return <CardVideo key={`card-${index}`} data={data} handleFavorite={toggleFavorite} />
            })
            : []

    }, [list])

    const templateFavoriteNone = () => {
        return (
            <>
                <div className="w-100 vh-75 d-flex flex-column justify-content-center align-items-center">
                    <img
                        src="/assets/octocat-zero.png"
                        alt="icon do octocat triste, por não ter favoritos"
                        width={256}
                        height={256}
                    />
                    <h2 className="mt-5 text-secondary">
                        0 favorito :(
                    </h2>
                </div>
            </>
        )
    }

    return (
        <>
            {cards.length ? cards : templateFavoriteNone()}
        </>
    )
}