import { StateSchema } from "app/Providers/StoreProvider/config/StateSchema";
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from "shared/config/routeConfig/routeConfig";
import { PreLoader } from "widgets/PreLoader/index";

const AppRouter = () => {

    const isAuth = useSelector((state: StateSchema) => state.user.authData)


    return (
        <Suspense fallback={<PreLoader/>}>
        <Routes>
            {(Object.values(routerConfig).filter(route =>(route.authOnli && !isAuth) ? false : true)).map(({element, path})=>(
                <Route
                    key={path}
                    path={path}
                    element={element}
                />
            ))}
        </Routes>
    </Suspense>
    );
};

export default memo(AppRouter);