import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProfileProps, ProfileSchema } from 'pages/ProfilePage'
import { fetchProfileComments } from './fetchUserComments'
import { CommentProfileProps, CommentProfileSchema } from '../CommentTypes/commentsTypes'



const initialState: CommentProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
}
  
export const profileCommentSlice = createSlice({
    name: 'profilecomments',
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileComments.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileComments.fulfilled, (state, action: PayloadAction<CommentProfileProps>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchProfileComments.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
      },
  })


  export const { actions: profileCommentSliceActions } = profileCommentSlice
  export const { reducer: profileCommentSliceReduser } = profileCommentSlice

