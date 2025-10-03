import { createSlice } from '@reduxjs/toolkit';


const searhSlice = createSlice({
    name: 'search',
    initialState: {
        beforeQuery: '',
        query: ''
    },
    reducers: {
        updateSearch: (state, action) => {
            state.beforeQuery = state.query
            state.query = action.payload
        }
    }
})

export default searhSlice.reducer
export const { updateSearch } = searhSlice.actions