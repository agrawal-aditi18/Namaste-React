import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    //our app reducer contains reducers of each slice
    reducer :{
        cart : cartReducer
    }
});

export default appStore;