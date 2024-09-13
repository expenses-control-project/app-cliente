import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import SidebarComponent from "./components/Sidebar/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbar/TopNavbarComponent";
import LoaderComponent from "../../components/Loader/LoaderComponent";
import BottomNavbar from "./components/Sidebar/BottomNavbar/BottomNavbar";

// Views
const HomeVIew = lazy(() => import("./views/Home/HomeView"));
const EstablishmentsVIew = lazy(() => import("./views/Establishments/EstablishmentsVIew"));
const MetricsView = lazy(() => import("./views/Metrics/MetricsView"));
const MovementsView = lazy(() => import("./views/Movements/MovementsView"));

function DashboardPage() {
  return (
    <main className="d-flex flex-row " style={{ width: "100%"}}>
      <SidebarComponent />
      <div className="d-fex flex-column " style={{ width: "100%", height: "100%"  }}>
        <TopNavbarComponent />
        <Suspense fallback={<LoaderComponent />}>
          <Routes>
            <Route path="/inicio" element={<HomeVIew />} />
            <Route path="/locales" element={<EstablishmentsVIew />} />
            <Route path="/actividad" element={<MovementsView />} />
            <Route path="/metricas" element={<MetricsView />} />
            <Route path="/*" element={<Navigate to="/dashboard/inicio" />} />
          </Routes>
        </Suspense>
        <BottomNavbar />
      </div>
    </main>
  );
}

export default DashboardPage;
