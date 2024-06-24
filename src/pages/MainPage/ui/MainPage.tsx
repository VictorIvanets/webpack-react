import { useTheme } from "app/Providers/Theme/useTheme"
import { AxiosError } from "axios";
import { Article } from "pages/ArticlesPage/articleTypes/articleTypes";
import { MouseEventHandler, memo, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom";
import { $api } from "shared/api/api";
import { className } from "shared/lib/helpers/classNames/classNames"
import { PreLoaderGradient } from "widgets/PreLoader/ui/PreloaderGradient";


export const MainPage = memo(() => {
  const {theme} = useTheme()
  const {t} = useTranslation()
  const [data, setData] = useState(null)

  const fethArtical = async () => {
      try {
          const {data} = await $api.get<Article[]>(`/news`) 
         
              setData(data)

      } catch(e) {
          if (e instanceof AxiosError){
              console.log(e.message)
          }
          return
      }
  }

  useEffect(()=>{
      fethArtical()
  }, [])

  const stateArt = 
      data && data.map((data: Article, index: number)=>{
      return <NavLink key={data.title} className="artipage__link margin1" to={`/article_datails/${index+1}`}>
          <img className="artipage__img" src={data.img} alt="art" />
          {data.title}
          </NavLink>
  })


  return (
      <div className={className('artipage', {artipagedark: (theme === "dark" ? true : false), artipageruby: (theme === "ruby" ? true : false)}, [])}>

      <div className={className('artipage__header', {artipagedark__header: (theme === "dark" ? true : false), artipageruby__header: (theme === "ruby" ? true : false)},  [])}>
          <h1 className='margin1'> {t("ARTICLES")}</h1>
      </div>
      {stateArt ? stateArt : <PreLoaderGradient/>}
      </div>
  );
  
});

export default MainPage



























// export function MainPage(){

//    const {theme} = useTheme()
//    const {t} = useTranslation()

//    const [scale, setScale] = useState(100)
//    const [moveY, setMoveY] = useState(0)
//    const [moveX, setMoveX] = useState(0)

//     function mouseDown(e: any) {
//       setScale(90)
//     }

//     function mouseUp(e: any) {
//       setMoveY((e.clientY - 160))
//       setMoveX((e.clientX - 221))
//       setScale(100)
//     }


//     return <div 
//     onMouseDown={mouseDown} 
//     onMouseUp={mouseUp} 
//       className={className('mainpage', {maindarks: (theme === "dark" ? true : false)}, [])}>
//       <div className={className('mainpage__header', {maindarks__header: (theme === "dark" ? true : false)}, [])}>
//             <h1 className={className('margin1', {mainh1dark: (theme === "dark" ? true : false)}, [])}>{t("Головна сторінка")}</h1>
//       </div>

//     <div className="ballwrapper">
//     <div 
//     className="testbox"
//     style={{top: `${moveY}px`, left: `${moveX}px`, scale: `${scale}%`}}
//     ></div>
//     </div>



//     </div>
//    }

//    export default MainPage