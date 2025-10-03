import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoritesSlice'

export default function useFavorites() {
    const dispatch = useDispatch()

    const list = useSelector((store:any) => store.favorites.items)

    return {
        addFavorite: (data: any) => { 
            console.log('userFavorite add => ', data)    
            dispatch(addFavorite(data)) 
        
        },
        removeFavorite: (id: string) => { dispatch(removeFavorite(id)) },
        list 
    }
}