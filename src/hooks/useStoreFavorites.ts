import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoritesSlice'

export default function useStoreFavorites() {
    const dispatch = useDispatch()

    const list = useSelector((store:any) => store.favorites.items)

    const hasDuplicate = (value:any) => {
        return list.find((item:any) => item.id === value.id) || false
    }

    return {
        addFavorite: (data: any) => { 
            if (hasDuplicate(data)) return 

            console.log('userFavorite add => ', data)
            dispatch(addFavorite(data)) 
        },
        removeFavorite: (id: string) => { dispatch(removeFavorite(id)) },
        list 
    }
}