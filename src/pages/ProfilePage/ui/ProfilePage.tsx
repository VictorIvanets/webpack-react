import { createAsyncThunk } from "@reduxjs/toolkit"
import { StateSchema } from "app/Providers/StoreProvider/config/StateSchema"
import { useTheme } from "app/Providers/Theme/useTheme"
import axiois, { AxiosError } from 'axios'
import { User } from "entities/UserSlise"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import DinamicModulLoader, { ReducerList } from "shared/lib/DinamicModulLoader/DinamicModulLoader"
import { className } from "shared/lib/helpers/classNames/classNames"
import { profileReduser } from "../Profileconfig/ProfileSlice"
import { AppThunkDispatchLogin } from "shared/lib/helpers/AppDispatch/AppDispath"
import { fetchProfileData } from "../Profileconfig/fetchProfileData"
import { PreLoader } from "widgets/PreLoader"
import ProfileCard from "./ProfileCard"


const reducers: ReducerList = {
    profile: profileReduser

}

export function ProfilePage(){

    const {theme} = useTheme()
    const {t} = useTranslation()
    const dispatch = useDispatch<AppThunkDispatchLogin>();
    const profile = useSelector((state: StateSchema) => state?.profile?.data || '')


useEffect(()=>{
    dispatch(fetchProfileData())
},[dispatch])



    return ( <DinamicModulLoader reducers={reducers} removeAfterUnmount>
    
    <div 
        className={className('profilepage', {profildarks: (theme === "dark" ? true : false)}, [])}>

      <div className={className('profilepage__header', {profildarks__header: (theme === "dark" ? true : false)}, [])}>
            <h1 className={className('margin1', {profilh1dark: (theme === "dark" ? true : false)}, [])}>{t("Профайл")}</h1>
      </div>
      
      <ProfileCard/>

    </div>
    

    </DinamicModulLoader>
)
   }

   export default ProfilePage