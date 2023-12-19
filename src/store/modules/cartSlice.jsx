import { createSlice } from '@reduxjs/toolkit'
import productData from '../../assets/api/cartdata'

const initialState = {
  carts : [],
  cartTotal : 0,
  products : productData,
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCart: (state,action) => {
      state.carts.push(action.payload)
    },
    removeCart:(state, action) => {
      state.carts = state.carts.filter(item => item.id !== action.payload)
    },
    totalCart:(state, action) => {
      state.cartTotal = state.carts.reduce((acc, cur) => acc + cur.price, 0)
    },
    sortCart:(state,action) => {
      if(action.payload !== '') {
        state.products.sort((a,b) => a[action.payload] > b[action.payload] ? 1 : -1)
      }   
    },    
    searchCart:(state,action) => {
     state.products = productData.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
    },
    resetCart:(state, action) => {
      state.products = productData
    },
    cartsEdit:(state, action) => {
      let newItem = state.carts.find(item => item.id === action.payload.id)
      let original = productData.find(item => item.id === action.payload.id)
      if(newItem){
        newItem.price = original.price * action.payload.count
      }
    },
    chkRemove:(state,action) => {

    }
  },
})

export const { addCart,removeCart,totalCart,sortCart,resetCart,searchCart,cartsEdit,chkRemove} = cartSlice.actions
export default cartSlice.reducer