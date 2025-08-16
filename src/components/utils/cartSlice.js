import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({   //it contains a config
    name: "cart",
    initialState: {
        items: [],  //these are cart items and initally it is empty array

    },
    reducers: {
        addItem: (state, action) =>{
            //mutating the state here...(directly modifying the state here)
            state.items.push(action.payload);
        },
        removeItem : (state) =>{
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; //make array -> []
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

