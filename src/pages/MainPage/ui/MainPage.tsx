import { useTheme } from "app/Providers/Theme/useTheme"
import { className } from "shared/lib/helpers/classNames/classNames"

export function MainPage(){

   const {theme} = useTheme()


    return <div className={className('mainpage', {maindarks: (theme === "dark" ? true : false)}, [])}>
   
       <h1 className={className('margin1', {mainh1dark: (theme === "dark" ? true : false)}, [])}>Main</h1>

    </div>
   }

   export default MainPage