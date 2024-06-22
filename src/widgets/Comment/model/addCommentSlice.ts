import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
  } from '@reduxjs/toolkit'
import { Comment, addCommentSchema, addCommentType } from '../CommentTypes/commentsTypes'
import { StateSchema } from 'app/Providers/StoreProvider/config/StateSchema'
import { CommentSchema } from './CommentSchema'
import { fetchComments } from './fetchComments'
import { addComment } from './addComment'
  
  



  const initialState:addCommentSchema = { 
    isLoading: false,
    error: undefined,
    data: undefined
    }
  
  const addCommentSlice = createSlice({
    name: 'addCommentSlice',
    initialState: initialState,
    reducers: {
        addNewComment: (state, action: PayloadAction<addCommentType>) => {
            state.data = {
                ...state.data, 
                ...action.payload
            }
        },
    },

    extraReducers: (builder) => {
        builder

            .addCase(addComment.pending, (state) => {
              state.error = undefined
              state.isLoading = true
              })
            .addCase(addComment.fulfilled, (state, action:     PayloadAction<addCommentType>) => {
              state.isLoading = false
              state.data = action.payload
              state.error = undefined
              })
            .addCase(addComment.rejected, (state, action) => {
              state.isLoading = false
              state.error = action.payload
              })
          
          }


  })

  export const { actions: addCommentSliceActions } = addCommentSlice
  export const { reducer: addCommentSliceReduser } = addCommentSlice
  

