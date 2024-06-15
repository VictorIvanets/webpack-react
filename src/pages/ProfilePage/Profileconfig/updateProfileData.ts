import { createAsyncThunk } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "app/Providers/StoreProvider/config/StateSchema";
import { AxiosError } from 'axios'
import { loginActions } from "entities/LoginSlice";
import { ProfileProps, ValidateProfileError } from "./Profiletype";
import { useSelector } from "react-redux";
import { valodProfoleData } from "../ValidateProfile/ValidateProfile";



export const updateProfileData = createAsyncThunk<ProfileProps, void, {extra: ThunkExtraArg, state: StateSchema}>(
    'profile/updateProfileData',
    async (_, {extra, rejectWithValue, getState})=>{
        
        const dataForm = getState().profile.data

        const errors = valodProfoleData(dataForm)

        if(errors.length) {
            return rejectWithValue(errors)
        }

        try {

            const response = await extra.api.put<ProfileProps>('/profile', dataForm)
            
            return response.data
           

        } catch(e) {
            if (e instanceof AxiosError){
                return rejectWithValue(e.message)
            }
            
            return rejectWithValue([ValidateProfileError.SERVER_ERROR])
           
        }
    }
)