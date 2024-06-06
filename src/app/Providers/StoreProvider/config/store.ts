import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { userReduser } from 'entities/UserSlise'
import { isUserReduser } from 'entities/AuthSlise'
import { loginReduser } from 'entities/LofinSlice'



export function createReduxStore(initialState?: StateSchema){

    const rootReduser: ReducersMapObject<StateSchema> = {
        user: userReduser,
        isuser: isUserReduser,
        login: loginReduser
    }

    return configureStore<StateSchema>({
        reducer: rootReduser,
        devTools: true, //__IS_DEV__,
        preloadedState: initialState
      })

}
