import { createSlice } from "@reduxjs/toolkit";

const loginSlice= createSlice({
    name:'show_login',
    initialState: {show_login: false, show_login_register: false},
    reducers:{
        toggle(state){
            state.show_login = !state.show_login

        },
        toggle_login_reg(state){
            console.log('triggered')
            state.show_login_register = !state.show_login_register
        }
    }
})

export default loginSlice.reducer
export const loginAction =loginSlice.actions

