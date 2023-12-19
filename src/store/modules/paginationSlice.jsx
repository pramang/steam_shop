import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pageData: [],
  currPage:1,
  totalPage:1,
  postsPerpage:10
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    prevPage: (state,action) => {
      if(state.currPage === 1){
        state.currPage = 1
      } else {
        state.currPage--
      }
  
    },
    nextPage: (state,action) => {
        if(state.currPage === state.totalPage){
            state.currPage = state.totalPage
          } else {
            state.currPage++
          }
    },
    currentPage: (state,action) => {
    state.currPage = action.payload
    },
    addData: (state,action) => {
    state.pageData = action.payload // 각각 다른 데이터를 받아야한다
    },
    totalData: (state,action) => {
    state.currPage = 1
    state.totalPage = Math.ceil(state.pageData.length / state.postsPerpage) // 페이지 갯수 뽑아내기
    },
  },
})

// Action creators are generated for each case reducer function
export const {prevPage,nextPage,currentPage,addData,totalData} = paginationSlice.actions
export default paginationSlice.reducer