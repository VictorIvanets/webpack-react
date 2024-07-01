import { Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { userReduser } from 'entities/UserSlise'
import { isUserReduser } from 'entities/AuthSlise'
import { loginReduser } from 'entities/LoginSlice'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'
import { NavigateOptions, To } from 'react-router-dom'



export function createReduxStore(
    initialState?: StateSchema,
    navigate?: (to: To, options?: NavigateOptions)=> void
) {

    const rootReduser: ReducersMapObject<StateSchema> = {
        user: userReduser,
        isuser: isUserReduser,
        login: loginReduser
    }

    const extraArgument: ThunkExtraArg = {
        api: $api,
        navigate,
    }


    const reducerManager = createReducerManager(rootReduser)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce as Reducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument
            }
        })
      })

      //@ts-ignore
      store.reducerManager = reducerManager

      return store

}
