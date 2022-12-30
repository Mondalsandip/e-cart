import { createSlice } from "@reduxjs/toolkit";

const showSlice= createSlice({
    name:'show',
    initialState: {show: true},
    reducers:{
        toggle(state){
            state.show = !state.show

        }
    }
})

export default showSlice.reducer
export const showAction =showSlice.actions

