import { Action, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { authSchema } from "entities/AuthSlise";
import { userSchema } from "entities/UserSlise";
import { LoginSchema } from "features/AuthByUserName/LoginForm";
import { ArticlesDetailsSchema } from "pages/ArticlesDetailsPage/ArticlesDetailsConfig/ArticlesDetailsSchema";
import { ProfileSchema } from "pages/ProfilePage";
import { NavigateOptions, To } from "react-router-dom";



export interface StateSchema {

    user: userSchema
    isuser: authSchema
    login?: LoginSchema
    profile?: ProfileSchema
    ArticlesDetail?: ArticlesDetailsSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: Action) => StateSchema
    add: (key: StateSchemaKey, reducer: Reducer) => any
    remove: (key: StateSchemaKey) => any
}


export interface ReduxStoreManager extends EnhancedStore<StateSchema>{

    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions)=> void
}