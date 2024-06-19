import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface User {
  id?: string,
  username?: string,
  password?: string,
}

export interface userSchema {
  authData?: User,
  _initer?: boolean
}


const initialState: userSchema = {
  _initer: false
}
  
export const userSlise = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
          state.authData = action.payload
        },
        initAuthData: (state) => {
          const user = localStorage.getItem("user")
          if(user){
            state.authData = JSON.parse(user)
          }
          state._initer = true
        },
        logout: (state) => {
            state.authData = undefined
            localStorage.removeItem("user")
        }
    },
  })


  export const { actions: userActions } = userSlise
  export const { reducer: userReduser } = userSlise

