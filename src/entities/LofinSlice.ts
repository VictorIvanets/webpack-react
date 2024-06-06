import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginSchema } from 'features/AuthByUserName/LoginForm'
import { LoginByUserName } from 'features/Servises/LoginByUserName'




  const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false
    }
  
  export const LoginSlise = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>)=>{
            state.username = action.payload
        },
        setUserPass: (state, action: PayloadAction<string>)=>{
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(LoginByUserName.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
          })
          .addCase(LoginByUserName.fulfilled, (state, action) => {
                state.isLoading = false
          })
          .addCase(LoginByUserName.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
          })
      },
  })


  export const { actions: loginActions } = LoginSlise
  export const { reducer: loginReduser } = LoginSlise

