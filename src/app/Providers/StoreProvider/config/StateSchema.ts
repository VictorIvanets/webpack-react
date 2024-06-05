
// export interface CounterState {
//     value: number
// }

import { authSchema } from "entities/AuthSlise";
import { userSchema } from "entities/UserSlise";



export interface StateSchema {

    user: userSchema
    isuser: authSchema
}