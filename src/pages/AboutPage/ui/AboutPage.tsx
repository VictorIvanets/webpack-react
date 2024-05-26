import { useTheme } from "app/Providers/Theme/useTheme"
import { className } from "shared/lib/helpers/classNames/classNames"

export function AboutPage(){

   const {theme} = useTheme()


   return <div className={className('about', {aboutdarks: (theme === "dark" ? true : false)}, [])}>

    <h1 className={className('margin1', {abouth1dark: (theme === "dark" ? true : false)}, [])}>About</h1>
 
 </div>
}

export default AboutPage