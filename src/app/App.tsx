import { useTheme } from "./Providers/Theme/useTheme"
import { className } from "../shared/lib/helpers/classNames/classNames"
import { AppRouter } from "./Providers/router"
import { Navbar } from "widgets/navbar/index"
import { SideBar } from "widgets/SideBar/index"
import { Suspense, useEffect, useState } from "react"
import { PreLoader } from "widgets/PreLoader/index"
import LeftComponent from "pages/LeftComponent/LeftComponent"
import Modal from "widgets/Modal/Modal"



export function App() {

const {theme} = useTheme()

// useEffect(()=>{
//     if (Math.random()< 0.5){

//         throw new Error("ОШИБКА")
        
//     }
// }, [])


    return <div className={className('app', {}, [theme])}> 
            <Suspense fallback={<PreLoader/>}>
                <Navbar/>
                <LeftComponent/>
                <AppRouter/> 
                <SideBar/> 
            </Suspense> 
            </div>
}