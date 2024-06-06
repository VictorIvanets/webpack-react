
// export interface CounterState {
//     value: number
// }

import { authSchema } from "entities/AuthSlise";
import { userSchema } from "entities/UserSlise";
import { LoginSchema } from "features/AuthByUserName/LoginForm";



export interface StateSchema {

    user: userSchema
    isuser: authSchema
    login?: LoginSchema
}