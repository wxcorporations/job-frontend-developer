import { useDispatch, useSelector } from 'react-redux';
import { updateSearch } from '../../store/searchSlice'

export default function useStoreSearch() {
    const dispatch = useDispatch()

    const beforeQuery = useSelector((store:any) => store.search.beforeQuery)
    const query = useSelector((store:any) => store.search.query)

    return {
        updateSearch: (data: string) => { dispatch(updateSearch(data)) },
        beforeQuery,
        query
    }
}