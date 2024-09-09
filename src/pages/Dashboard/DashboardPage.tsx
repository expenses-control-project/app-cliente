import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import SidebarComponent from "./components/Sidebar/SidebarComponent";

// Views
const HomeVIew = lazy(() => import("./views/HomeView"));
const EstablishmentsVIew = lazy(() => import("./views/EstablishmentsVIew"));
const MetricsView = lazy(() => import("./views/MetricsView"));
const MovementsView = lazy(() => import("./views/MovementsView"));

function DashboardPage() {
  return (
    <main>
      <SidebarComponent />
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/inicio" element={<HomeVIew />} />
          <Route path="/establecimientos" element={<EstablishmentsVIew />} />
          <Route path="/movimientos" element={<MovementsView />} />
          <Route path="/metricas" element={<MetricsView />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default DashboardPage;
