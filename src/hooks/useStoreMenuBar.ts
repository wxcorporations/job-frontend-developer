import { useSelector, useDispatch } from "react-redux";
import { activeLinkFavorite, activeLinkHome, activeSearch } from "../../store/menuBarSlice"

export default function useStoreMenuBar() {
    const dispatch = useDispatch()
    
    const isActiveLinkFavorite = useSelector((store:any) => store.menu.linkFavorite)
    const isActiveSearch = useSelector((store:any) => store.menu.inputSearch)
    const isActiveLinkHome = useSelector((store:any) => store.menu.linkHome)

    return {
        switchLinkFavorite: (bool:boolean) => {dispatch(activeLinkFavorite(bool))},
        switchLinkHome: (bool:boolean) => {dispatch(activeLinkHome(bool))},
        switchSearch: (bool:boolean) => {dispatch(activeSearch(bool))},
        isActiveLinkFavorite,
        isActiveLinkHome,
        isActiveSearch,
    }
}