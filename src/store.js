import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cart-reducer'
import showReducer from "./reducers/show-reducer";
import loginReducer from "./reducers/login-reducer";
 
const store= configureStore({
    reducer:{ cart:  cartReducer, show: showReducer , show_login:loginReducer  }
})

export default store