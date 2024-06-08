import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from './Profiletype'


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
  })


  export const { actions: profileActions } = profileSlice
  export const { reducer: profileReduser } = profileSlice

