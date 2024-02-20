import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const PanierSlices = createSlice({
    name: 'PanierSlice',
    initialState: {
        panierdata:[]
    },
    reducers: {
        logout: (state) => {
            state.token = null
            state.isAuth = false
            localStorage.removeItem('token')
            localStorage.removeItem('isAuth')
        },
       addpanier: (state,action) => {
            const existingItem = state.panierdata.find((item) => item.id === action.payload.id);
            if (existingItem) {
              const updatedItems = state.panierdata.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
              );
             state.panierdata=updatedItems
            } else {
                state.panierdata=[...state.panierdata, { ...action.payload, quantity: 1 }];
            }
          },
          updateQuantity:(state,action) => {
            const existingItem = state.panierdata.find((item) => item.id === action.payload.id);
            if (existingItem) {
              const updatedItems = state.panierdata.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.num } : item
              );
             state.panierdata=updatedItems
            } else {
                state.panierdata=[...state.panierdata, { ...action.payload, quantity: 1 }];
            }
          },
          removeFromCart:(state,action) => {
    
              state.panierdata= state.panierdata.filter((item) =>   item.id != action.payload )
          
          }
    },
  
    

})

export default PanierSlices.reducer
export const { logout,addpanier,updateQuantity,removeFromCart } = PanierSlices.actions
