import { Suspense} from "react"
import { Route, Routes, NavLink, Link } from "react-router-dom"
import { useTheme } from "./Providers/Theme/useTheme"
import { className } from "../shared/lib/helpers/classNames/classNames"
import { AboutPage } from "../pages/AboutPage/index"
import { MainPage } from "../pages/MainPage/index"


export function App() {

const {theme, toggleTheme} = useTheme()



    return <div className={className('app', {}, [theme])}> 

        <div className="header">
            <h3 className="margin1">START</h3>
            <NavLink className="margin1" to="/">Главная</NavLink>
            <NavLink className="margin1" to="/about">About</NavLink>
            <button onClick={toggleTheme}>THEME</button>
        </div>
        
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                     <Route path={'/about'} element={<AboutPage/>}/>
                     <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
      
        </div>
}