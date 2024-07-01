import { Action, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { authSchema } from "entities/AuthSlise";
import { userSchema } from "entities/UserSlise";
import { LoginSchema } from "features/AuthByUserName/LoginForm";
import { ArticlesDetailsSchema } from "pages/ArticlesDetailsPage/ArticlesDetailsConfig/ArticlesDetailsSchema";
import { ProfileSchema } from "pages/ProfilePage";
import { NavigateOptions, To } from "react-router-dom";
import { CommentSchema } from "widgets/Comment";
import { CommentProfileSchema, addCommentSchema } from "widgets/Comment/CommentTypes/commentsTypes";


export type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T
}

export type MountedReducer = OptionalRecord<StateSchemaKey, boolean>

export interface StateSchema {

    user: userSchema
    isuser: authSchema
    login?: LoginSchema
    profile?: ProfileSchema
    ArticlesDetail?: ArticlesDetailsSchema
    Comments?: CommentSchema
    CommentUser?: CommentProfileSchema
    addCommentUser?: addCommentSchema

}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: Action) => StateSchema
    add: (key: StateSchemaKey, reducer: Reducer) => any
    remove: (key: StateSchemaKey) => any
    getMountedReducer: ()=> MountedReducer
}


export interface ReduxStoreManager extends EnhancedStore<StateSchema>{

    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions)=> void
}