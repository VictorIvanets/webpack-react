import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ArticlesDetailsSchema } from './ArticlesDetailsSchema'
import { fethArticalById } from './fethArticalById'
import { Article } from 'pages/ArticlesPage/articleTypes/articleTypes'





const initialState: ArticlesDetailsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
}
  
export const ArticlesDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fethArticalById.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fethArticalById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fethArticalById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })        
      },
  })


  export const { actions: ArticlesDetailsActions } = ArticlesDetailsSlice
  export const { reducer: ArticlesDetailsReduser } = ArticlesDetailsSlice

