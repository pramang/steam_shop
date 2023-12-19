import { configureStore } from '@reduxjs/toolkit'
import notice from './modules/noticeSlice'
import auth from './modules/authSlice'
import cart from './modules/cartSlice'
import customer from './modules/customerSlice'
import pagination from './modules/paginationSlice'

export const store = configureStore({
  reducer: {
    notice,
    customer,
    auth,
    cart,
    pagination,
  },
})