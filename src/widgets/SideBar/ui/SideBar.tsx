import { className } from 'shared/lib/helpers/classNames/classNames';
import { useTheme } from 'app/Providers/Theme/useTheme';
import { useState } from 'react';


export const SideBar = () => {

    const {theme} = useTheme()
    const [collaps, setCollaps] = useState(false)

    const toggle = () => {
        setCollaps(!collaps)
    }

    return (
        <div className={className('sidebar', {sidebardark: (theme === "dark" ? true : false), collaps: (collaps === true ? true : false)}, [])}>
            
            <button className={className('sidebtn', {sidebarbtndark: (theme === "dark" ? true : false), sidebtn90: (collaps === true ? true : false)}, [])}
            onClick={toggle}>{collaps ? 'SIDEBAR': 'TOGGLE'}</button>
        </div>
    );
};

export default SideBar;