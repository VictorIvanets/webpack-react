import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArg } from "app/Providers/StoreProvider/config/StateSchema";
import { AxiosError } from 'axios'
import { loginActions } from "entities/LoginSlice";
import { Article } from "pages/ArticlesPage/articleTypes/articleTypes";




export const fethArticalById = createAsyncThunk<
    Article, 
    string, 
    {extra: ThunkExtraArg}
    >(
    'articleDetails/fethArticalById',
    async (articleId, thunkApi)=>{


        const {extra, rejectWithValue} = thunkApi


        try {

            const response = await extra.api.get<Article>(`/news/${articleId}`)
            
            return response.data
           

        } catch(e) {
            if (e instanceof AxiosError){
                return rejectWithValue(e.message)
            }
            
            return rejectWithValue("error")
           
        }
    }
)