import { createAsyncThunk } from "@reduxjs/toolkit"
import { StateSchema } from "app/Providers/StoreProvider/config/StateSchema"
import { useTheme } from "app/Providers/Theme/useTheme"
import axiois, { AxiosError } from 'axios'
import { User } from "entities/UserSlise"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import DinamicModulLoader, { ReducerList } from "shared/lib/DinamicModulLoader/DinamicModulLoader"
import { className } from "shared/lib/helpers/classNames/classNames"
import { profileReduser } from "../Profileconfig/ProfileSlice"


const reducers: ReducerList = {
    profile: profileReduser

}




export function ProfilePage(){

   const {theme} = useTheme()
   const {t} = useTranslation()



const {username, password, error} = useSelector((state: StateSchema) => state.login)





    return ( <DinamicModulLoader reducers={reducers} removeAfterUnmount>
    
    <div 
        className={className('profilepage', {profildarks: (theme === "dark" ? true : false)}, [])}>

      <div className={className('profilepage__header', {profildarks__header: (theme === "dark" ? true : false)}, [])}>
            <h1 className={className('margin1', {profilh1dark: (theme === "dark" ? true : false)}, [])}>{t("Профайл")}</h1>
      </div>

    </div>
    

    </DinamicModulLoader>
)
   }

   export default ProfilePage