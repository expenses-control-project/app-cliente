import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "../utils/localStoreMethods";

export const AuthGuard = () => {
    const token = getItem('token');
    return token ? <Outlet /> : <Navigate replace to="/users/login" />
}

export default AuthGuard;