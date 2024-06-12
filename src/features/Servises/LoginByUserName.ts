import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArg } from "app/Providers/StoreProvider/config/StateSchema";
import axiois, { AxiosError } from 'axios'
import { loginActions } from "entities/LoginSlice";
import { User, userActions } from "entities/UserSlise";


interface LoginUserProps{
    username: string
    password: string
}

export const LoginByUserName = createAsyncThunk<
        User, 
        LoginUserProps, 
        {extra: ThunkExtraArg}>
    (
    'login/LoginByUserName',
    async (authData, {dispatch, extra, rejectWithValue})=>{

        try {
            const response = await extra.api.post('/login', authData)
            
            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem("user", JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            extra.navigate("/profile")
            return response.data
        } catch(e) {
            if (e instanceof AxiosError){
                dispatch(loginActions.loginError('ERROR'))
                return rejectWithValue("error")
            }
            dispatch(loginActions.loginError('ERROR'))
            return rejectWithValue("error")
        }
    }
)