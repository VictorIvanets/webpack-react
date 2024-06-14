import { StateSchema } from "app/Providers/StoreProvider/config/StateSchema"
import { AboutPage } from "pages/AboutPage/index"
import { MainPage } from "pages/MainPage/index"
import { ProfilePage } from "pages/ProfilePage/index"
import { useSelector } from "react-redux"
import { RouteProps, RouterProps } from "react-router-dom"
import { PreLoader } from "widgets/PreLoader"
import { NotFound } from "widgets/not_found"



type AppRouterProps = RouteProps & {
    path: string
    authOnli?: boolean
}




export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    LOADER = 'load',
    NOTFOUND = 'notfound',
    PROFILE = 'profile'
}


export const RoutePath: Record<AppRoutes, string> = {
    
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.LOADER]: '/load',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOTFOUND]: '/*',
}

export const routerConfig: Record<AppRoutes, AppRouterProps> = {

    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>,
        authOnli: false
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.LOADER]: {
        path: RoutePath.load,
        element: <PreLoader/>
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage/>,
        authOnli: true
    },


    
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.notfound,
        element: <NotFound/>
    },
    
    }