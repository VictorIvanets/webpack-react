import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
  } from '@reduxjs/toolkit'
import { Comment } from '../CommentTypes/commentsTypes'
import { StateSchema } from 'app/Providers/StoreProvider/config/StateSchema'
import { CommentSchema } from './CommentSchema'
import { fetchComments } from './fetchComments'
  
  
  export const commentsAdapter = createEntityAdapter({
    selectId: (comment: Comment) => comment.id,
  })


  export const getComments = commentsAdapter.getSelectors<StateSchema>(
    (state)=>state.Comments || commentsAdapter.getInitialState()
  )
  
  const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: commentsAdapter.getInitialState<CommentSchema>( { 
        isLoading: false,
        ids: [],
        entities: {},
        error: undefined
        }
    ),
    reducers: {
        

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action.payload)

            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })}
  })

  export const { actions: commentSliceActions } = commentSlice
  export const { reducer: commentSliceReduser } = commentSlice
  

