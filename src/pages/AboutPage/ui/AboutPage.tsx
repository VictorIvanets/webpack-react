import { useTheme } from "app/Providers/Theme/useTheme"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { className } from "shared/lib/helpers/classNames/classNames"

export function AboutPage(){

   const {theme} = useTheme()
   const {t} = useTranslation()


// useEffect(()=>{
//       fetch(`http://localhost:8000/posts/`) 
//           .then(response => response.json())
//           .then(data => {
//             // console.log(data);
//           })
//           .catch(err => {
//             //   console.log(err);
//           });
      
// },[]);





   return <div className={className('about', {aboutdarks: (theme === "dark" ? true : false)}, [])}>
      <div className={className('about__header', {aboutdarks__header: (theme === "dark" ? true : false)}, [])}>
            <h1 className={className('margin1', {abouth1dark: (theme === "dark" ? true : false)}, [])}>{t("Про сайт")}</h1>
      </div>

      <div className="about__text">
            <p className="about__text_p">{t("моя робота1")}</p>
            <p className="about__text_p">{t("моя робота2")}</p>
            <p className="about__text_p">{t("моя робота3")}</p>
            </div>

      


 </div>
}

export default AboutPage