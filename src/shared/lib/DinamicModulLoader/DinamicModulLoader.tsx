import { ReduxStoreManager, StateSchemaKey } from "app/Providers/StoreProvider/config/StateSchema";
import { loginReduser } from "entities/LoginSlice";
import { FunctionComponent, ReactNode, ReducerAction, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { Reducer } from '@reduxjs/toolkit';



export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DinamicModulLoaderProps{
    // name: StateSchemaKey
    reducers: ReducerList
    children: ReactNode
    removeAfterUnmount?: boolean
}

export const DinamicModulLoader: FunctionComponent<DinamicModulLoaderProps> = (props) => {

const dispatch = useDispatch()
const {children, reducers, removeAfterUnmount} = props
const store = useStore() as ReduxStoreManager

useEffect(()=>{
const mountedReducer = store.reducerManager.getMountedReducer()

Object.entries(reducers).forEach(([name, reducer])=>{
    const mounted = mountedReducer[name as StateSchemaKey]
    if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer)
        dispatch({type: `@INIT ${name} REDUCER`})
    }

})



return ()=> {
if(removeAfterUnmount){

    Object.entries(reducers).forEach(([name, reducer])=>{
        dispatch({type: `@DESTROY ${name} REDUCER`})
        store.reducerManager.remove(name as StateSchemaKey)
    })
}
}}, [])

    return  <> {children}  </>

};

export default DinamicModulLoader;


const initialReducer: ReducerList = {
    login: loginReduser
}

{/* <DinamicModulLoader reducers={initialReducer}> <> ASYNC COMPONENT </> </DinamicModulLoader> */}

