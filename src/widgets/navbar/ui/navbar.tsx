import { useTheme } from 'app/Providers/Theme/useTheme';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LangSwitch } from 'widgets/LangSwitch';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import Logolight from 'shared/assets/Logoapp_light.svg'
import Logodark from 'shared/assets/Logoapp_dark.svg'
import Modal from 'widgets/Modal/Modal';
import { className } from "shared/lib/helpers/classNames/classNames"
import { useCallback, useEffect, useState } from 'react';
import Button from 'widgets/Button/Button';
import { Auth } from 'widgets/Auth/index';
import { useDispatch, useSelector } from 'react-redux';
import { isUserActions } from 'entities/AuthSlise';
import { getUserName } from 'entities/UserSelector';
import { userActions } from 'entities/UserSlise';

export const Navbar = () => {

    const {theme} = useTheme()
    const {t} = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const dispatch = useDispatch()
    const userName = useSelector(getUserName)


    const onToggleModal = useCallback(()=>{
        setIsAuthModal(!isAuthModal)
    }, [isAuthModal])

    const [userOut, setUserOut] = useState("")

    useEffect(()=>{
        setUserOut(userName)
        }, [isAuthModal, userName]
    )

    function removUser(){
        localStorage.removeItem('form')
        setUserOut(null)
        dispatch(isUserActions.isUserAuth(false))
        dispatch(userActions.addUserName(""))
        dispatch(userActions.addUserMail(""))
        dispatch(userActions.addUserTel(""))
    }


    const user = () =>{
    if (userOut) {
        return userOut
    } else { return '' }
    }

  


    return (
    <div className="header">
        <div className='navbar'>
            <div className="logo">{theme === "dark" ? <Logolight className='logosvg'/>:<Logodark className='logosvg'/>}</div>
            <NavLink className="margin1" to="/">{t("Головна сторінка")}</NavLink>
            <NavLink className="margin1" to="/about">{t("Про сайт")}</NavLink>
            <h2 style={{marginLeft:"10px", marginRight:"10px"}}>{user()}</h2>
            <Button 
            className ="modalbtn" 
            onClick={

                !userOut ? 
                ()=>{setIsAuthModal(!isAuthModal)}
                 : ()=>{removUser()}
                
                }>
                
                {!userOut ? t("Зайти") : t("Вийти")}
                
                </Button>
                
        </div>
        <div className='switch'>
            <LangSwitch/>
            <ThemeSwitch/>
        </div>

        <Modal
            className={className('modal', {
            opened: isAuthModal === true ? true : false}, [])}
            isOpen={isAuthModal}
            onClose={()=>{onToggleModal()}}
            >
                
            <Auth onToggleModal={onToggleModal}/>

        </Modal>
    </div>
    );
};



