import { createSlice } from '@reduxjs/toolkit'
import noticedata from '../../assets/api/noticedata'

const initialState = {
    noticedata : noticedata
}

export const noticeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
})

export default noticeSlice.reducer