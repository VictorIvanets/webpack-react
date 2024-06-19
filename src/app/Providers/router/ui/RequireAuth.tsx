import { StateSchema } from "app/Providers/StoreProvider/config/StateSchema";
import { useSelector } from "react-redux";
import { Navigate, Route, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export function RequireAuth({children}: {children: JSX.Element}) {
    let auth = useSelector((state: StateSchema) => state.user.authData)
    let location = useLocation()

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{from: location}} replace/>
    }
    return children
}