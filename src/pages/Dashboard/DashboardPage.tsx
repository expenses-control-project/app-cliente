import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import SidebarComponent from "./components/Sidebar/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbar/TopNavbarComponent";
import LoaderComponent from "../../components/Loader/LoaderComponent";
import BottomNavbar from "./components/Sidebar/BottomNavbar/BottomNavbar";
import AccountsView from "./views/AccuntsView/AccountsView";

// Views
const HomeView = lazy(() => import("./views/Home/HomeView"));
const EstablishmentsView = lazy(() => import("./views/Establishments/EstablishmentsView"));
const MovementsView = lazy(() => import("./views/Movements/MovementsView"));

function DashboardPage() {
  return (
    <main className="d-flex flex-column flex-sm-row h-100 h-lg-auto">
      <SidebarComponent />
      <div className="d-fex flex-column " style={{ width: "100%"}}>
        <TopNavbarComponent />
        <Suspense fallback={<LoaderComponent />}>
          <Routes>
            <Route path="/inicio" element={<HomeView />} />
            <Route path="/cuentas" element={<AccountsView />} />
            <Route path="/locales" element={<EstablishmentsView />} />
            <Route path="/actividad" element={<MovementsView />} />
            <Route path="/*" element={<Navigate to="/dashboard/inicio" />} />
          </Routes>
        </Suspense>
      </div>
      <BottomNavbar />
    </main>
  );
}

export default DashboardPage;
