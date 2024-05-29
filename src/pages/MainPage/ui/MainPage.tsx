import { useTheme } from "app/Providers/Theme/useTheme"
import { useTranslation } from "react-i18next"
import { className } from "shared/lib/helpers/classNames/classNames"

export function MainPage(){

   const {theme} = useTheme()
   const {t} = useTranslation()



    return <div className={className('mainpage', {maindarks: (theme === "dark" ? true : false)}, [])}>
      <div className={className('mainpage__header', {maindarks__header: (theme === "dark" ? true : false)}, [])}>
            <h1 className={className('margin1', {mainh1dark: (theme === "dark" ? true : false)}, [])}>{t("Головна сторінка")}</h1>
      </div>


    </div>
   }

   export default MainPage