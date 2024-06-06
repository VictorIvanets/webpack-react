import { PayloadAction, createSlice } from '@reduxjs/toolkit'


export interface User {
  id?: string,
  username?: string,
  password?: string,
}

export interface userSchema {
  authData?: User
}



  const initialState: userSchema = {

}
  
  export const userSlise = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
          state.authData = action.payload
        }
    },
  })


  export const { actions: userActions } = userSlise
  export const { reducer: userReduser } = userSlise

