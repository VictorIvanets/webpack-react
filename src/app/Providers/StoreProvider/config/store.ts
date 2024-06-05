import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { userReduser } from 'entities/UserSlise'
import { isUserReduser } from 'entities/AuthSlise'



export function createReduxStore(initialState: StateSchema){

    return configureStore<StateSchema>({
        reducer: {
            user: userReduser,
            isuser: isUserReduser
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
      })

}
