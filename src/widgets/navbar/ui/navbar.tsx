import { useTheme } from 'app/Providers/Theme/useTheme';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import { LangSwitch } from 'widgets/LangSwitch';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import Logolight from 'shared/assets/Logoapp_light.svg'
import Logodark from 'shared/assets/Logoapp_dark.svg'
import { memo, useCallback, useEffect, useState } from 'react';
import Button from 'widgets/Button/Button';
import { LoginModal } from 'features/AuthByUserName/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/Providers/StoreProvider/config/StateSchema';
import { userActions } from 'entities/UserSlise';
import { loginActions } from 'entities/LoginSlice';


export const Navbar = memo(() => {

    const {theme} = useTheme()
    const {t} = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector((state: StateSchema) => state.user.authData)
    const userName = useSelector((state: StateSchema) => state.login.username) || (JSON.parse(localStorage.getItem('user')))?.username
    const navigator = useNavigate()
    const dispatch = useDispatch()

    const onClose = useCallback(()=>{
        setIsAuthModal(false)
    }, [])

    const onShow = useCallback(()=>{
        setIsAuthModal(true)
    }, [])

    const onLogOut = useCallback(()=>{
        navigator("/")
        dispatch(userActions.logout())
        dispatch(loginActions.clearLoginState())
    }, [dispatch])

    useEffect(()=>{
        if(authData) {
            setIsAuthModal(false)
        }
    },[authData])

    return (
    <div className="header">
        <div className='navbar'>
            <div className="logo">{theme === "dark" ? <Logolight className='logosvg'/>:<Logodark className='logosvg'/>}</div>

            {!authData 
            ? <Button 
            className ="modalbtn" 
            onClick={onShow}> {t("Зайти")}
            </Button> 
            : <>
            <NavLink className="margin1" to="/">{t("Головна сторінка")}</NavLink>
            <NavLink className="margin1" to="/about">{t("Про сайт")}</NavLink>
            <NavLink className="margin1" to="/profile">{
            `${t("Профайл")} ${userName.toUpperCase()}`
            }</NavLink>

            <Button 
            className ="modalbtnOut" 
            onClick={onLogOut}> {t("Вийти")}
            </Button> 
            </>
            }
                
        </div>

        <div className='switch'>
            <LangSwitch/>
            <ThemeSwitch/>
        </div>

        <LoginModal 
        isOpen = {isAuthModal}
        onClose={onClose}
        />
    </div>
    );
});



