import { useTheme } from 'app/Providers/Theme/useTheme';
import { NavLink } from 'react-router-dom';
import { className } from 'shared/lib/helpers/classNames/classNames';
import { ThemeSwitch } from 'widgets/ThemeSwitch';

export const Navbar = () => {

    const {theme, toggleTheme} = useTheme()

    return (
    <div className="header">
        <div className='navbar'>
            <h3 className="margin1">NEW APP</h3>
            <NavLink className="margin1" to="/">Главная</NavLink>
            <NavLink className="margin1" to="/about">About</NavLink>
        </div>
            <ThemeSwitch/>
    </div>
    );
};



