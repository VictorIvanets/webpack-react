import { className } from 'shared/lib/helpers/classNames/classNames';
import { useTheme } from 'app/Providers/Theme/useTheme';
import Day from 'shared/assets/day.svg'
import Night from 'shared/assets/night.svg'
import { Button } from 'widgets/Button/Button';
import { memo } from 'react';





export const ThemeSwitch = memo(() => {

    const {theme, toggleTheme} = useTheme()
    {
        return ( <div>
            <Button 
                className= {className('headerbtn', {headerbtndark: (theme === "dark" ? true : false)}, [])}
                onClick={toggleTheme}> {theme === "dark" ? <div className='svgbox'><Night className='svg'/></div> : <div className='svgbox'><Day className='svg'/></div>} 
            </Button>

            </div>
        );
    }
})

export default ThemeSwitch;