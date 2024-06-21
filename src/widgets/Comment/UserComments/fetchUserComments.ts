import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArg } from "app/Providers/StoreProvider/config/StateSchema";
import { AxiosError } from 'axios'
import { loginActions } from "entities/LoginSlice";
import { ProfileProps } from "pages/ProfilePage";
import { CommentProfileProps } from "../CommentTypes/commentsTypes";




export const fetchProfileComments = createAsyncThunk<
    CommentProfileProps, 
    string, 
    {extra: ThunkExtraArg}
    >('profilecomments/fetchProfileComments',
        async (userid, thunkApi)=>{

        const {extra, rejectWithValue} = thunkApi

        try {

            const response = await extra.api.get<CommentProfileProps>(`/profile/${userid}`)
            
            return response.data
           

        } catch(e) {
            if (e instanceof AxiosError){
                return rejectWithValue(e.message)
            }
            
            return rejectWithValue("error")
           
        }
    }
)