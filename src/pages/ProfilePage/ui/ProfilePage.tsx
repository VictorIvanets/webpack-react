import { createAsyncThunk } from "@reduxjs/toolkit"
import { StateSchema } from "app/Providers/StoreProvider/config/StateSchema"
import { useTheme } from "app/Providers/Theme/useTheme"
import axiois, { AxiosError } from 'axios'
import { User } from "entities/UserSlise"
import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import DinamicModulLoader, { ReducerList } from "shared/lib/DinamicModulLoader/DinamicModulLoader"
import { className } from "shared/lib/helpers/classNames/classNames"
import { profileActions, profileReduser } from "../Profileconfig/ProfileSlice"
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
    const dispatchLogin = useDispatch<AppThunkDispatchLogin>();
    const dispatch = useDispatch()
    const dataForm = useSelector((state: StateSchema) => state?.profile?.form || undefined)
    const isLoading = useSelector((state: StateSchema) => state?.profile?.isLoading || undefined)
    const error = useSelector((state: StateSchema) => state?.profile?.error || '')
    const readonly = useSelector((state: StateSchema) => state?.profile?.readonly || false)
    const authData = useSelector((state: StateSchema) => state.user.authData)
    console.log(authData)


    useEffect(()=>{
        dispatchLogin(fetchProfileData())
    },[dispatchLogin])


    const onCangeFirstname = useCallback((e?: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(profileActions.updateProfile({first: e.target.value || ''}))
    }, [dispatch])

    const onCangeFLastname = useCallback((e?: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(profileActions.updateProfile({lastname: e.target.value || ''}))
    }, [dispatch])

    const onCangeUsername = useCallback((e?: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(profileActions.updateProfile({username: e.target.value || ''}))
    }, [dispatch])

    const onCangeAge = useCallback((e?: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(profileActions.updateProfile({age: e.target.value || ''}))
    }, [dispatch])

    const onCangeCyty = useCallback((e?: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(profileActions.updateProfile({city: e.target.value || ''}))
    }, [dispatch])

    const onCangeCountry = useCallback((e?: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(profileActions.updateProfile({country: e.target.value || ''}))
    }, [dispatch])


    return ( <DinamicModulLoader reducers={reducers} removeAfterUnmount>
    
    <div 
        className={className('profilepage', {profildarks: (theme === "dark" ? true : false)}, [])}>

      <div className={className('profilepage__header', {profildarks__header: (theme === "dark" ? true : false)}, [])}>
            <h1 className={className('margin1', {profilh1dark: (theme === "dark" ? true : false)}, [])}>{t("Профайл")}</h1>
      </div>
      
      {authData === undefined ? <h2>ВИ НЕ УВІЙШЛИ</h2> : <ProfileCard 
      isLoading = {isLoading}
      data={dataForm}
      error={error}
      readonly={readonly}
      onCangeFLastname = {onCangeFLastname}
      onCangeFirstname = {onCangeFirstname}
      onCangeUsername = {onCangeUsername}
      onCangeAge = {onCangeAge}
      onCangeCyty = {onCangeCyty}
      onCangeCountry = {onCangeCountry}
      />}
    </div>
    

    </DinamicModulLoader>
)
   }

   export default ProfilePage