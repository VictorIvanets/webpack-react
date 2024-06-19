import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Currency, ProfileProps, ProfileSchema } from './Profiletype'
import { fetchProfileData } from './fetchProfileData'
import { updateProfileData } from './updateProfileData'








const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: false,
    form: undefined
}
  
export const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        updateProfile: (state, action: PayloadAction<ProfileProps>) => {
            state.form = {
                ...state.form, 
                ...action.payload
            }
        },
        cancelUpdateProfile: (state) => {
            state.readonly = false
            state.error = undefined
            state.form = state.data
        },
        saveUpdateProfile: (state) => {
            state.data = state.form
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<ProfileProps>) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
                state.readonly = false
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

                    .addCase(updateProfileData.pending, (state) => {
                          state.error = undefined
                          state.isLoading = true
                      })
                    .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<ProfileProps>) => {
                          state.isLoading = false
                          state.data = action.payload
                          state.form = action.payload
                          state.readonly = false
                      })
                    .addCase(updateProfileData.rejected, (state, action) => {
                          state.isLoading = false
                          state.error = action.payload
                      })
      },
  })


  export const { actions: profileActions } = profileSlice
  export const { reducer: profileReduser } = profileSlice

