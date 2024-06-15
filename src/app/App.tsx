import { useTheme } from "./Providers/Theme/useTheme"
import { className } from "../shared/lib/helpers/classNames/classNames"
import { AppRouter } from "./Providers/router"
import { Navbar } from "widgets/navbar/index"
import { SideBar } from "widgets/SideBar/index"
import { Suspense, useEffect, useState } from "react"
import { PreLoader } from "widgets/PreLoader/index"
import LeftComponent from "pages/LeftComponent/LeftComponent"
import Modal from "widgets/Modal/Modal"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "entities/UserSlise"
import { useNavigate } from "react-router-dom"
import { StateSchema } from "./Providers/StoreProvider/config/StateSchema"



export function App() {

const {theme} = useTheme()
const dispatch = useDispatch()
const navigate = useNavigate()
const inited = useSelector((state: StateSchema) => state.user._initer)

useEffect(()=>{
    dispatch(userActions.initAuthData())
}, [dispatch])


    return <div className={className('app', {}, [theme])}> 
            <Suspense fallback={<PreLoader/>}>
                <Navbar/>
                <LeftComponent/>
                {inited && <AppRouter/> }
                <SideBar/> 
            </Suspense> 
            </div>
}