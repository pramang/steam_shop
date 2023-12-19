import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

export const { increment } = authSlice.actions
export default authSlice.reducer