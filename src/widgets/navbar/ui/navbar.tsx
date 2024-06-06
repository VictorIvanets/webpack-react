import { useTheme } from 'app/Providers/Theme/useTheme';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LangSwitch } from 'widgets/LangSwitch';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import Logolight from 'shared/assets/Logoapp_light.svg'
import Logodark from 'shared/assets/Logoapp_dark.svg'
import Modal from 'widgets/Modal/Modal';
import { className } from "shared/lib/helpers/classNames/classNames"
import { useCallback, useState } from 'react';
import Button from 'widgets/Button/Button';
import { Auth } from 'widgets/Auth/index';
import { LoginModal } from 'features/AuthByUserName/LoginModal';


export const Navbar = () => {

    const {theme} = useTheme()
    const {t} = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)


    const onClose = useCallback(()=>{
        setIsAuthModal(false)
    }, [])

    const onShow = useCallback(()=>{
        setIsAuthModal(true)
    }, [])

  


    return (
    <div className="header">
        <div className='navbar'>
            <div className="logo">{theme === "dark" ? <Logolight className='logosvg'/>:<Logodark className='logosvg'/>}</div>
            <NavLink className="margin1" to="/">{t("Головна сторінка")}</NavLink>
            <NavLink className="margin1" to="/about">{t("Про сайт")}</NavLink>
            <Button 
            className ="modalbtn" 
            onClick={onShow}>
                
                {t("Зайти")}
                
                </Button>
                
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
};



