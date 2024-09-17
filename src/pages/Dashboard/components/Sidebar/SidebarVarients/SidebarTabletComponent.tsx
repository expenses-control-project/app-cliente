import { House, Shop } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";

import logo_ec from "../../../../../assets/logo_ec.svg";
import { FiPieChart } from "react-icons/fi";

function SidebarTabletComponent() {
  const location = useLocation();
  const lastSegment = location.pathname.split('/').filter(Boolean).pop();
  
  return (
    <nav
      className="d-none d-lg-flex d-xxl-none flex-column flex-shrink-0 bg-body-secondary border-end"
      style={{ height: "100vh", position: "sticky", top: "0",}}
    >
      <div className="d-block p-3 link-dark d-flex justify-content-center">
        <img src={logo_ec} alt="Logo expenses control" width={40} height={40} />
      </div>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item link-hover  ">
          <Link
            to="/dashboard/inicio"
            className={`nav-link ${lastSegment == "inicio" && "active"} text-white d-flex align-items-center fs-6 rounded-0 d-flex flex-column`}
          >
            <House size={20} color="white" />
            Inicio
          </Link>
        </li>
        <li className="nav-item link-hover border-top">
          <Link 
            to="/dashboard/actividad" 
            className={`nav-link ${lastSegment == "actividad" && "active"} text-white d-flex align-items-center fs-6 rounded-0 d-flex flex-column`}>
            <FiPieChart size={20} color="white" />
            Actividad
          </Link>
        </li>
        <li className="nav-item link-hover border-top ">
          <Link 
            to="/dashboard/locales" 
            className={`nav-link ${lastSegment == "locales" && "active"} text-white d-flex align-items-center fs-6 rounded-0 d-flex flex-column`}>
            <Shop size={20} color="white" />
            Locales
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarTabletComponent;
