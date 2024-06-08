import { Action, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { authSchema } from "entities/AuthSlise";
import { userSchema } from "entities/UserSlise";
import { LoginSchema } from "features/AuthByUserName/LoginForm";



export interface StateSchema {

    user: userSchema
    isuser: authSchema
    login?: LoginSchema
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