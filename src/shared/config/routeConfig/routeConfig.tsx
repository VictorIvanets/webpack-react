import { AboutPage } from "pages/AboutPage/index"
import { MainPage } from "pages/MainPage/index"
import { ProfilePage } from "pages/ProfilePage/index"
import { RouterProps } from "react-router-dom"
import { PreLoader } from "widgets/PreLoader"
import { NotFound } from "widgets/not_found"

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

export const routerConfig = {

    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
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
        element: <ProfilePage/>
    },


    
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.notfound,
        element: <NotFound/>
    },
    
    }