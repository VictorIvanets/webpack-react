import { useTheme } from "app/Providers/Theme/useTheme"
import { isUserActions } from "entities/AuthSlise";
import { userActions } from "entities/UserSlise";
import { FormEvent, memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { className } from "shared/lib/helpers/classNames/classNames"
import Button from "widgets/Button/Button";
import { Input } from "widgets/Input/index";
import { useRef } from 'react';
import { loginActions, loginReduser } from "entities/LofinSlice";
import { StateSchema } from "app/Providers/StoreProvider/config/StateSchema";
import { LoginByUserName } from "features/Servises/LoginByUserName";
import { Action, Store, ThunkDispatch } from "@reduxjs/toolkit";

export type LoginForm = {
    name: {
        value: string
    },
    email: {
        value: string
    },
    tel: {
        value: string
    }
}

export type RootState = ReturnType<typeof loginReduser>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, Action>;
export type AppStore = Omit<Store<RootState, Action>, "dispatch"> & {
    dispatch: AppThunkDispatch;
  };







export const Auth = memo(({isOpen}: any) => {
    
    const useAppDispatch = useDispatch<AppThunkDispatch>();
    const {theme} = useTheme()
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        inputRef.current.focus();
    }, [isOpen])

 
    const [validForm1, setValidForm1] = useState(false)
    const [validForm2, setValidForm2] = useState(false)


    const onCangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(loginActions.setUserName(e.target.value))
        e.target.value.length <= 3 ? setValidForm1(true) : setValidForm1(false)
    },[dispatch])

    const onCangePass = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(loginActions.setUserPass(e.target.value))
        e.target.value.length <= 3 ? setValidForm2(true) : setValidForm2(false)
    },[dispatch])

    const {username, password, isLoading} = useSelector((state: StateSchema) => state.login)

    // console.log(username)
    // console.log(password)

    const onLoginClick = useCallback(()=> {
        // dispatch(LoginByUserName())
        useAppDispatch(LoginByUserName({username, password}))

    },[useAppDispatch, username, password])
  
  
    return (
        <div className={className('autbox', {
            autboxdark: (theme === "dark" ? true : false)}, [])}>
        <div className='autbox__text'>
            <h2>{t("Зайти")}</h2>
        </div>
        <div 
        // onSubmit={submit} 
        className="autbox__inputs">

            <Input  
            name="login" 
            type="text" 
            placeholder="login"
            ref={inputRef}
            value={username}
            onChange={onCangeName}
            className={className('', {inputdark: (theme === "dark" ? true : false), invalidinput1: (validForm1 === false ? false : true)}, [])}
            />

            <Input 
            name="password" 
            type="text" 
            placeholder="password"
            value={password}
            onChange={onCangePass}
            className={className('', {inputdark: (theme === "dark" ? true : false), invalidinput2: (validForm2 === false ? false : true)}, [])}
            />

            <div><Button onClick={onLoginClick} className="modalbtn">{t("УВІЙТИ")}</Button></div>
        </div>

        </div>
    );

});

export default Auth;



   // const submit = (e: FormEvent) => {
    //     e.preventDefault();
    //     const target = e.target as typeof e.target & LoginForm

    //     if (target.name.value.length <=3 
    //         || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(target.email.value))
    //         || target.tel.value.length <=9
    //     ) {
    //         setValidForm(true)
    //     } else {
    //         localStorage.setItem('form', JSON.stringify([target.name.value, target.email.value, target.tel.value]))

    //         dispatch(isUserActions.isUserAuth(true))
    //         setValidForm(false)
    //         props.onToggleModal()
    //         target.name.value = ''
    //         target.email.value = ''
    //         target.tel.value = ''
    //     }
    // };