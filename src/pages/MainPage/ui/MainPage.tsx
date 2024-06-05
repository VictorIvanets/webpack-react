import { useTheme } from "app/Providers/Theme/useTheme"
import { MouseEventHandler, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { className } from "shared/lib/helpers/classNames/classNames"

export function MainPage(){

   const {theme} = useTheme()
   const {t} = useTranslation()

   const [scale, setScale] = useState(100)
   const [moveY, setMoveY] = useState(0)
   const [moveX, setMoveX] = useState(0)

    function mouseDown(e: any) {
      setScale(90)
    }

    function mouseUp(e: any) {
      setMoveY((e.clientY - 160))
      setMoveX((e.clientX - 221))
      setScale(100)
    }


    return <div 
    onMouseDown={mouseDown} 
    onMouseUp={mouseUp} 
      className={className('mainpage', {maindarks: (theme === "dark" ? true : false)}, [])}>
      <div className={className('mainpage__header', {maindarks__header: (theme === "dark" ? true : false)}, [])}>
            <h1 className={className('margin1', {mainh1dark: (theme === "dark" ? true : false)}, [])}>{t("Головна сторінка")}</h1>
      </div>

      <div 

      className="testbox"
      style={{top: `${moveY}px`, left: `${moveX}px`, scale: `${scale}%`}}
      ></div>


    </div>
   }

   export default MainPage