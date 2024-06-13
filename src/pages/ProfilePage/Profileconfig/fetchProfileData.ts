import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArg } from "app/Providers/StoreProvider/config/StateSchema";
import { AxiosError } from 'axios'
import { loginActions } from "entities/LoginSlice";
import { ProfileProps } from "./Profiletype";




export const fetchProfileData = createAsyncThunk<ProfileProps, void, {extra: ThunkExtraArg}>(
    'profile/fetchProfileData',
    async (_, {extra, rejectWithValue})=>{

        try {

            const response = await extra.api.get<ProfileProps>('/profile')
            
            return response.data
           

        } catch(e) {
            if (e instanceof AxiosError){
                return rejectWithValue(e.message)
            }
            
            return rejectWithValue("error")
           
        }
    }
)