import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArg } from "app/Providers/StoreProvider/config/StateSchema";
import { AxiosError } from 'axios'
import { loginActions } from "entities/LoginSlice";
import { ProfileProps } from "./Profiletype";




export const fetchProfileData = createAsyncThunk<
    ProfileProps, 
    string, 
    {extra: ThunkExtraArg}
    >('profile/fetchProfileData',
        async (userid, thunkApi)=>{

        const {extra, rejectWithValue} = thunkApi

        try {

            const response = await extra.api.get<ProfileProps>(`/profile/${userid}`)
            
            return response.data
           

        } catch(e) {
            if (e instanceof AxiosError){
                return rejectWithValue(e.message)
            }
            
            return rejectWithValue("error")
           
        }
    }
)