import { className } from 'shared/lib/helpers/classNames/classNames';
import { useTheme } from 'app/Providers/Theme/useTheme';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LangSwitch } from 'widgets/LangSwitch';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserName, getUserTel, getUserMail, isUser } from 'entities/UserSelector';


export const SideBar = () => {

    const {theme} = useTheme()
    const [collaps, setCollaps] = useState(true)
    const {t} = useTranslation()
    const userTel = useSelector(getUserTel)
    const userMail = useSelector(getUserMail)
    const userName = useSelector(getUserName)
    const isUserIn = useSelector(isUser)
    const [isUserBar, setIsUserBar] = useState(true)


    useEffect(()=>{
        setIsUserBar(!isUserBar)
    }, [isUserIn])

    const toggle = () => {
        setCollaps(!collaps)
    }

    return (
        <div className={className('sidebar', {sidebardark: (theme === "dark" ? true : false), collaps: (collaps === true ? true : false)}, [])}>
            
        <div className='sidebarbox'>
        
        
        <div className='sidebarbox__navbar'>
            <NavLink className="margin1" to={RoutePath.main}>{t("Головна сторінка")}</NavLink>
            <NavLink className="margin1" to={RoutePath.about}>{t("Про сайт")}</NavLink>
            <NavLink className="margin1" to={RoutePath.load}>{t("Прелоадер")}</NavLink>
        </div>

        <div>
            <h3>{isUserBar ? userName : ""}</h3>
            <h3>{isUserBar ? userTel : ""}</h3>
            <h3>{isUserBar ? userMail : ""}</h3>
        </div>

        <div className='sidebarbox__switch'>
            <LangSwitch/>
            <ThemeSwitch/>
        </div>



            <button className={className('sidebtn', {sidebarbtndark: (theme === "dark" ? true : false), sidebtn90: (collaps === true ? true : false)}, [])}
            onClick={toggle}>{collaps ? t("SIDEBAR"):t('TO HIDE')}</button>
            </div>

        </div>
    );
};

export default SideBar;