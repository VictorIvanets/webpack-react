import { createAsyncThunk } from "@reduxjs/toolkit";
import axiois, { AxiosError } from 'axios'
import { loginActions } from "entities/LoginSlice";
import { User, userActions } from "entities/UserSlise";


interface LoginUserProps{
    username: string
    password: string
}

export const LoginByUserName = createAsyncThunk<User, LoginUserProps>(
    'login/LoginByUserName',
    async (authData, thunkAPI)=>{

        try {
            const response = await axiois.post('http://localhost:8000/login', authData)

            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem("user", JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch(e) {
            if (e instanceof AxiosError){
                thunkAPI.dispatch(loginActions.loginError('ERROR'))
                return thunkAPI.rejectWithValue("error")
            }
            thunkAPI.dispatch(loginActions.loginError('ERROR'))
            return thunkAPI.rejectWithValue("error")
        }
    }
)