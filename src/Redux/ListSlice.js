import { createSlice } from "@reduxjs/toolkit";

var initialState = {
    Items: []
};

const ListSlice = createSlice({
    name: "CRUD",
    initialState,
    
    reducers:{
        AddItems: (state, action)=>{
            state.Items.push(action.payload)
        },

        DeleteItem:(state, action)=>{
            state.Items = state.Items.filter((Item) => Item.id != action.payload);
        },

        UpdateItem:(state, action)=>{
            state.Items.map(Item => {
                if(Item.id === action.payload.id){
                    Item.title = action.payload.title
                }
            })
        }
    }
})


export const { AddItems, DeleteItem, UpdateItem } = ListSlice.actions;

export default ListSlice.reducer;