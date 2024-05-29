import { useTheme } from 'app/Providers/Theme/useTheme';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LangSwitch } from 'widgets/LangSwitch';
import { ThemeSwitch } from 'widgets/ThemeSwitch';

export const Navbar = () => {


    const {t} = useTranslation()

    return (
    <div className="header">
        <div className='navbar'>
            <h3 className="margin1">NEW APP</h3>
            <NavLink className="margin1" to="/">{t("Головна сторінка")}</NavLink>
            <NavLink className="margin1" to="/about">{t("Про сайт")}</NavLink>
        </div>
        <div className='switch'>
            <LangSwitch/>
            <ThemeSwitch/>
        </div>

    </div>
    );
};



