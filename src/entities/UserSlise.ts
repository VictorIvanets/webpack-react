import { createSlice } from '@reduxjs/toolkit'

export interface userSchema {
  name: string,
  email: string,
  tel: number | undefined
}



  const initialState: userSchema = {
    name: "",
    email: "",
    tel: null,
  
}
  
  export const userSlise = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addUserName: (state, action) => {
            state.name = action.payload
        },
        addUserMail: (state, action) => {
            state.email = action.payload
        },
        addUserTel: (state, action) => {
            state.tel = action.payload
      },
    },
  })


  export const { actions: userActions } = userSlise
  export const { reducer: userReduser } = userSlise

