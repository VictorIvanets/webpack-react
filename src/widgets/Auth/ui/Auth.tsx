import { useTheme } from "app/Providers/Theme/useTheme"
import { FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import { className } from "shared/lib/helpers/classNames/classNames"
import Button from "widgets/Button/Button";
import { Input } from "widgets/Input/index";

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


export const Auth = (props: any) => {
    

    const {theme} = useTheme()
    const {t} = useTranslation()


    const [substate, setSubstate] = useState([])
    // console.log(substate)
    //UPLOAD DATA
    


    const [validForm, setValidForm] = useState(false)


    const submit = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & LoginForm
        setSubstate([target.name.value, target.email.value, target.tel.value])

        if (target.name.value.length <=3 
            || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(target.email.value))
            || target.tel.value.length <=9
        ) {
            setValidForm(true)
        } else {
            localStorage.setItem('form', JSON.stringify([target.name.value, target.email.value, target.tel.value]))
            setValidForm(false)
            props.onToggleModal()
            target.name.value = ''
            target.email.value = ''
            target.tel.value = ''
        }
    };

    

    return (
        <div className={className('autbox', {
            autboxdark: (theme === "dark" ? true : false), 
            invalid: (validForm === false ? false : true)}, [])}>
        <div className='autbox__text'>
            <h2>{t("Зайти")}</h2>
        </div>
        <form 
        onSubmit={submit} 
        className="autbox__inputs">

            <Input  
            name="name" 
            type="text" 
            placeholder="name"
            className={className('', {inputdark: (theme === "dark" ? true : false)}, [])}
            />

            <Input 
            name="email" 
            type="text" 
            placeholder="email"
            className={className('', {inputdark: (theme === "dark" ? true : false)}, [])}
            />

            <Input
            name="tel" 
            type="text" 
            placeholder="tel"
            className={className('', {inputdark: (theme === "dark" ? true : false)}, [])}
            />

            <div><Button className="modalbtn">{t("УВІЙТИ")}</Button></div>
        </form>

        </div>
    );

};

export default Auth;