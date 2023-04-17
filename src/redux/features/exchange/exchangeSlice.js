import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    exchageData:[],
    isLoading:false,
    error:null
}
const exchangeSlice = createSlice({
    name:'exchange',
    initialState,
    reducers:{

    }
})
export default exchangeSlice.reducer