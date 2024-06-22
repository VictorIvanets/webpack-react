import { createAsyncThunk } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "app/Providers/StoreProvider/config/StateSchema";
import { AxiosError } from 'axios'
import { addCommentType } from "../CommentTypes/commentsTypes";
import { useSelector } from "react-redux";



export const addComment = createAsyncThunk<addCommentType, addCommentType, {extra: ThunkExtraArg, state: StateSchema}>(
    'comment/addComments',
    async (newComment, {extra, rejectWithValue, getState})=>{

        // const newComment = getState().addCommentUser?.data
        // console.log(newComment)

        try {

            const response = await extra.api.post<addCommentType>(
                `/comments`, newComment)
            
            return response.data
           

        } catch(e) {
            if (e instanceof AxiosError){
                return rejectWithValue(e.message)
            }
            
            return rejectWithValue("error")
           
        }
    }
)