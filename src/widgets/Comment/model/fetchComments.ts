import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArg } from "app/Providers/StoreProvider/config/StateSchema";
import { AxiosError } from 'axios'
import { loginActions } from "entities/LoginSlice";
import { Comment } from "../CommentTypes/commentsTypes";






export const fetchComments = createAsyncThunk<
    Comment[], 
    string | undefined, 
    {extra: ThunkExtraArg}
    >('comment/fetchComments',
        async (articleId, thunkApi)=>{


        const {extra, rejectWithValue} = thunkApi

        if(!articleId) {
            return rejectWithValue('not id')
        }


        try {

            const response = await extra.api.get<Comment[]>(`/comments`, {
                    params: {
                        articleId,
                        _expand: 'user'
                    }
                })
            
            return response.data
           

        } catch(e) {
            if (e instanceof AxiosError){
                return rejectWithValue(e.message)
            }
            
            return rejectWithValue("error")
           
        }
    }
)