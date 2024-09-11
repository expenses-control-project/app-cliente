import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import SidebarComponent from "./components/Sidebar/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbar/TopNavbarComponent";
import LoaderComponent from "../../components/Loader/LoaderComponent";
import BottomNavbar from "./components/Sidebar/BottomNavbar/BottomNavbar";

// Views
const HomeVIew = lazy(() => import("./views/HomeView"));
const EstablishmentsVIew = lazy(() => import("./views/EstablishmentsVIew"));
const MetricsView = lazy(() => import("./views/MetricsView"));
const MovementsView = lazy(() => import("./views/MovementsView"));

function DashboardPage() {
  return (
    <main className="d-flex flex-row " style={{ width: "100%" }}>
      <SidebarComponent />
      <div className="d-fex flex-column " style={{ width: "100%" }}>
        <TopNavbarComponent />
        <Suspense fallback={<LoaderComponent />}>
          <Routes>
            <Route path="/inicio" element={<HomeVIew />} />
            <Route path="/establecimientos" element={<EstablishmentsVIew />} />
            <Route path="/movimientos" element={<MovementsView />} />
            <Route path="/metricas" element={<MetricsView />} />
          </Routes>
        </Suspense>
        <BottomNavbar />
      </div>
    </main>
  );
}

export default DashboardPage;
