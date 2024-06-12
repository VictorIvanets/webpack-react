import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Currency, ProfileProps, ProfileSchema } from './Profiletype'
import { fetchProfileData } from './fetchProfileData'








const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true
}
  
export const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProfileData.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
          })
          .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<ProfileProps>) => {
                state.isLoading = false
                state.data = action.payload
          })
          .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
          })
      },
  })


  export const { actions: profileActions } = profileSlice
  export const { reducer: profileReduser } = profileSlice

