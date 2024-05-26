import { useTheme } from "./Providers/Theme/useTheme"
import { className } from "../shared/lib/helpers/classNames/classNames"
import { AppRouter } from "./Providers/router"
import { Navbar } from "widgets/navbar/index"
import { SideBar } from "widgets/SideBar/index"


export function App() {

const {theme} = useTheme()



    return <div className={className('app', {}, [theme])}> 
                <Navbar/>
                <AppRouter/> 
                <SideBar/>  
            </div>
}