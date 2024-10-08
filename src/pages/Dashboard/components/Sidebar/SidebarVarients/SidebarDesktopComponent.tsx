import { Link, useLocation } from "react-router-dom";

import {
  CashStack,
  House,
  Shop,
} from "react-bootstrap-icons";
import { FiPieChart } from "react-icons/fi";
import logo_ec from "../../../../../assets/logo_ec.svg";

function SidebarDesktopComponent() {
  const location = useLocation();
  const lastSegment = location.pathname.split('/').filter(Boolean).pop();
  
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
            className={`nav-link ${lastSegment == "inicio" && "active"} text-white d-flex gap-2 align-items-center fs-6 rounded-0`}
            aria-current="page"
          >
            <House size={20} /> Inicio
          </Link>
        </li>
        <li className="nav-item link-hover">
          <Link
            to="/dashboard/cuentas"
            className={`nav-link ${lastSegment == "cuentas" && "active"} text-white d-flex gap-2 align-items-center fs-6 rounded-0`}
            aria-current="page"
          >
            <CashStack size={20} /> Cuentas
          </Link>
        </li>
        <li className="link-hover">
          <Link
            to="/dashboard/actividad"
            className={`nav-link ${lastSegment == "actividad" && "active"} text-white d-flex gap-2 align-items-center fs-6 rounded-0`}
            aria-current="page"
          >
            <FiPieChart size={20} /> Actividad
          </Link>
        </li>
        <li className="link-hover">
          <Link
            to="/dashboard/locales"
            className={`nav-link ${lastSegment == "locales" && "active"} text-white d-flex gap-2 align-items-center fs-6 rounded-0`}
            aria-current="page"
          >
            <Shop size={20} />
            Locales
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarDesktopComponent;
