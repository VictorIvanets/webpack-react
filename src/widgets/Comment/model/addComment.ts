import { createAsyncThunk } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "app/Providers/StoreProvider/config/StateSchema";
import { AxiosError } from 'axios'
import { addCommentType } from "../CommentTypes/commentsTypes";



export const addComment = createAsyncThunk<addCommentType, addCommentType, {extra: ThunkExtraArg, state: StateSchema}>(
    'comment/addComments',
    async (newComment, {extra, rejectWithValue, getState})=>{


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

export const deleteComment = createAsyncThunk<addCommentType, string, {extra: ThunkExtraArg, state: StateSchema}>(
    'comment/addComments',
    async (id, {extra, rejectWithValue, getState})=>{


        try {
            const response = await extra.api.delete(
                `/comments/${id}`,)
            
            return response.data
           

        } catch(e) {
            if (e instanceof AxiosError){
                return rejectWithValue(e.message)
            }
            
            return rejectWithValue("error")
           
        }
    }
)