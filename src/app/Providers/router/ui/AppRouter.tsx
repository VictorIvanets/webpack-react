import { AboutPage } from "pages/AboutPage/index"
import { MainPage } from "pages/MainPage/index"
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from "shared/config/routeConfig/routeConfig";
import { PreLoader } from "widgets/PreLoader/index";

const AppRouter = () => {
    return (
        <Suspense fallback={<PreLoader/>}>
        <Routes>
            {Object.values(routerConfig).map(({element, path})=>(
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

export default AppRouter;