import {
  Activity,
  BarChart,
  House,
  Shop,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import logo_ec from "../../../../../assets/logo_ec.svg";


function SidebarDesktopComponent() {
  return (
    <nav
      className="d-none d-xxl-flex flex-column flex-shrink-0 bg-body-secondary text-white border-end"
      style={{width: "280px", position: "sticky", top: "0", height: "100vh" }}
    >
      <div className="d-flex flex-column align-items-center p-3 justify-content-center text-white text-decoration-none mb-2">
        <img src={logo_ec} alt="Logo expenses control" width={60} height={60} />
        <span className="fs-4">Expenses Control</span>
      </div>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item link-hover">
          <Link
            to="/dashboard/inicio"
            className="nav-link active d-flex gap-2 align-items-center fs-6 rounded-0"
            aria-current="page"
          >
            <House size={20} /> Inicio
          </Link>
        </li>
        <li className="link-hover">
          <Link
            to="/dashboard/actividad"
            className="nav-link text-white d-flex gap-2 align-items-center fs-6 rounded-0"
            aria-current="page"
          >
            <Activity size={20} /> Actividad
          </Link>
        </li>
        <li className="link-hover">
          <Link
            to="/dashboard/locales"
            className="nav-link text-white d-flex gap-2 align-items-center fs-6 rounded-0"
            aria-current="page"
          >
            <Shop size={20} />
            Locales
          </Link>
        </li>
        <li className="link-hover">
          <Link
            to="/dashborad/metricas"
            className="nav-link text-white d-flex gap-2 align-items-center fs-6 rounded-0"
            aria-current="page"
          >
            <BarChart size={20} /> Metricas
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarDesktopComponent;
