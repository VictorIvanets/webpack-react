import { createSlice } from '@reduxjs/toolkit'

export interface authSchema {
  isUser: boolean,
}


  const initialState: authSchema = {
    isUser: false,
}
  
  export const userSlise = createSlice({
    name: 'isUser',
    initialState: initialState,
    reducers: {
        isUserAuth: (state, action) => {
            state.isUser = action.payload
        },
    },
  })


  export const { actions: isUserActions } = userSlise
  export const { reducer: isUserReduser } = userSlise
