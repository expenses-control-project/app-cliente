import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import logo_ec from "../../assets/logo_ec.svg";
import LoaderComponent from "../../components/Loader/LoaderComponent";
import { ContainerViewAuth } from "./styled-components/auth.styled.component";

// Pages
const LoginView = lazy(() => import("./views/LoginView"));
const RegisterView = lazy(() => import("./views/RegisterView"));

function AuthPage() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <ContainerViewAuth
        className="d-flex flex-column align-items-center"
        
      >
        <nav
          className="d-flex justify-content-center pt-5 rounded-5 rounded-top-0"
          style={{ width: "100%" }}
        >
          <img src={logo_ec} alt="" width={60} height={60} />
        </nav>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ position: "relative" }}
        >
          <Routes>
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
          </Routes>
        </div>
        <p>© 2024 Expenses Control. Apache-2.0 license</p>
      </ContainerViewAuth>
    </Suspense>
  );
}

export default AuthPage;
