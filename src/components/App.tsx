import { Suspense, useContext, useEffect, useState } from "react"
import { Route, Routes, NavLink, Link } from "react-router-dom"
import { AboutPageasync } from "../pages/AboutPage/AboutPage.async"
import { MainPageasync } from "../pages/MainPage/MainPage.async"
import { ResumePageasync } from "../pages/ResumePage/ResumePage.async"
import { useTheme } from "../Theme/useTheme"
import { className } from "../helpers/classNames/classNames"


export function App() {

const {theme, toggleTheme} = useTheme()



    return <div className={className('app', {}, [theme])}> 

        <div className="header">
            <h3 className="margin1">START</h3>
            <NavLink className="margin1" to="/">Главная</NavLink>
            <NavLink className="margin1" to="/about">About</NavLink>
            <NavLink className="margin1" to="/resume">Resume</NavLink>
            <button onClick={toggleTheme}>THEME</button>
        </div>
        
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                     <Route path={'/about'} element={<AboutPageasync/>}/>
                     <Route path={'/'} element={<MainPageasync/>}/>
                     <Route path={'/resume'} element={<ResumePageasync/>}/>
                </Routes>
            </Suspense>
      
        </div>
}