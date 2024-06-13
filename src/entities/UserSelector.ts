import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/Providers/StoreProvider/config/StateSchema";
// import { userSchema } from "./UserSlise";



// export const getUserName = createSelector(
//     (state: StateSchema) => state.user.name,  
//     name =>  name.toUpperCase()
// )

// export const getUserTel = createSelector(
//     (state: StateSchema) => state.user.tel,  
//     tel =>  {
//         if (tel !== null) {
//         let i = tel.toString().split("")
//         i.splice(8, 0, "-")
//         i.splice(6, 0, "-")
//         i.splice(3, 0, "-")
//         return i.join("")
//     } else {return null}
//     }
// )

// export const getUserMail = createSelector(
//     (state: StateSchema) => state.user.email,  
//     email => email
// )


// export const isUser = createSelector(
//     (state: StateSchema) => state.isuser,  
//     isuser => isuser
// )