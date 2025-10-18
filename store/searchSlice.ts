import { createSlice } from '@reduxjs/toolkit';


const searhSlice = createSlice({
    name: 'search',
    initialState: {
        beforeQuery: '',
        query: '',
        nextToken: ''
    },
    reducers: {
        updateSearch: (state, action) => {
            state.beforeQuery = state.query
            state.query = action.payload
        },
        updateNextToken: (state, action) => {
            state.nextToken = action.payload
        }
    }
})

export default searhSlice.reducer
export const { updateSearch, updateNextToken } = searhSlice.actions