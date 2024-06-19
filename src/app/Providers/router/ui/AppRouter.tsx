import { StateSchema } from "app/Providers/StoreProvider/config/StateSchema";
import { Suspense, memo, useCallback, useMemo } from 'react';
import { useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { AppRouterProps, AppRoutes, routerConfig } from "shared/config/routeConfig/routeConfig";
import { PreLoader } from "widgets/PreLoader/index";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {

    const isAuth = useSelector((state: StateSchema) => state.user.authData)

   

    const renderWithWrapper = useCallback((route: AppRouterProps)=>{

        const element = (
            <Suspense fallback={<PreLoader/>}>
               {route.element}
            </Suspense>
        )
        return <Route
                key={route.path}
                path={route.path}
                element={route.authOnli 
                    ? <RequireAuth>{element}</RequireAuth> 
                    : element}
            />
        },[])

        return (
            <Routes>
                {Object.values(routerConfig).map(renderWithWrapper)}
            </Routes>
    );
};

export default memo(AppRouter);




// {(Object.values(routerConfig).filter(route =>(route.authOnli && !isAuth) ? false : true)).map(({element, path})=>(
//     <Route
//         key={path}
//         path={path}
//         element={element}
//     />
// ))}


// return (
//     <Suspense fallback={<PreLoader/>}>
//     <Routes>
//         {Object.values(routerConfig).map(({element, path})=>(
//             <Route
//                 key={path}
//                 path={path}
//                 element={element}
//             />
//         ))}
//     </Routes>
// </Suspense>
// );