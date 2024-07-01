import { Action, ReducersMapObject, combineReducers } from "redux"
import { MountedReducer, ReducerManager, StateSchema, StateSchemaKey } from "./StateSchema"
import { Reducer } from "@reduxjs/toolkit"




export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers }
  
    let combinedReducer = combineReducers(reducers)
  
    let keysToRemove: StateSchemaKey[] = []
   
    const mountedReducer: MountedReducer = {}

    return {
      getReducerMap: () => reducers,
      getMountedReducer: ()=> mountedReducer,
      reduce: (state: StateSchema, action: Action) => {
        if (keysToRemove.length > 0) {
          state = { ...state }
          
          for (let key of keysToRemove) {
            delete state[key]
          }
          keysToRemove = []
        }
  
        return combinedReducer(state, action)
      },
  
      add: (key: StateSchemaKey, reducer: Reducer) => {
        if (!key || reducers[key]) {
          return
        }
  
        reducers[key] = reducer
        mountedReducer[key] = true
  
        combinedReducer = combineReducers(reducers)
      },
  
      remove: (key: StateSchemaKey) => {
        if (!key || !reducers[key]) {
          return
        }
  
        delete reducers[key]
  
        keysToRemove.push(key)
        mountedReducer[key] = false
        combinedReducer = combineReducers(reducers)
      }
    }
  }
