import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        items: []
    },
    reducers: {
        //action:{"payload":"pizza"}
        addItem: (state,action)=>{
            state.items.push(action.payload)
        },
        removeItem: (state,action)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            //Mutate the state or return the new state
            state.items.length = 0;
        }
    }
})


export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;