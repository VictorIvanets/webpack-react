import { className } from 'shared/lib/helpers/classNames/classNames';
import { useTheme } from 'app/Providers/Theme/useTheme';
import Day from 'shared/assets/day.svg'
import Night from 'shared/assets/night.svg'
import { Button } from 'widgets/Button/Button';





export function ThemeSwitch () {

    const {theme, toggleTheme} = useTheme()
    {
        return ( <div>
            <Button 
                className= {className('headerbtn', {headerbtndark: (theme === "dark" ? true : false)}, [])}
                onClick={toggleTheme}> {theme === "dark" ? <Night className='svg'/> : <Day className='svg'/>} 
            </Button>

            </div>
        );
    }
}

export default ThemeSwitch;