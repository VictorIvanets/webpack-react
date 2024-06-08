import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { userReduser } from 'entities/UserSlise'
import { isUserReduser } from 'entities/AuthSlise'
import { loginReduser } from 'entities/LoginSlice'
import { createReducerManager } from './reducerManager'



export function createReduxStore(initialState?: StateSchema){

    const rootReduser: ReducersMapObject<StateSchema> = {
        user: userReduser,
        isuser: isUserReduser,
        login: loginReduser
    }


    const reducerManager = createReducerManager(rootReduser)

    const store = configureStore<StateSchema>({
        // reducer: rootReduser,
        reducer: reducerManager.reduce,
        devTools: true, //__IS_DEV__,
        preloadedState: initialState
      })

      //@ts-ignore
      store.reducerManager = reducerManager

      return store

}
