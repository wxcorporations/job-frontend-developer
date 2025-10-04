import useFavorites from "../../hooks/useFavorites";
import CardVideo from "../CardVideo";
export default function Favorites(props: any) {
    const { list, addFavorite, removeFavorite } = useFavorites()

    const toggleFavorite = (data:any) => {
        data.status ? (addFavorite(data)) : (removeFavorite(data))
    }

    const cards = list.length 
        ? list.map((data:any) => {
            return <CardVideo data={data} handleFavorite={toggleFavorite}/>
        })
        : []

    return (
        <>
            {cards}
        </>
    )
}