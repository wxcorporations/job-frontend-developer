import { useDispatch, useSelector } from 'react-redux';
import { updateNextToken, updateSearch } from '../../store/searchSlice'

export default function useStoreSearch() {
    const dispatch = useDispatch()

    const beforeQuery = useSelector((store:any) => store.search.beforeQuery)
    const query = useSelector((store:any) => store.search.query)
    const nextToken = useSelector((store:any) => store.search.nextToken)

    return {
        updateSearch: (data: string) => { dispatch(updateSearch(data)) },
        updateNextToken: (data: string) => { dispatch(updateNextToken(data)) },
        beforeQuery,
        nextToken,
        query,
    }
}