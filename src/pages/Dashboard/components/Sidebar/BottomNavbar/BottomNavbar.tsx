import { CashStack, House, Shop } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";

import "./BottomNavbar.css";
import { FiPieChart } from "react-icons/fi";

function BottomNavbar() {
  const location = useLocation();
  const lastSegment = location.pathname.split("/").filter(Boolean).pop();

  return (
    <nav
      className="d-lg-none bg-body-secondary border-top"
      style={{ width: "100%", position: "sticky", bottom: 0 }}
    >
      <ul
        className="nav text-center"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
      >
        <li className="nav-item link-hover px-0">
          <Link
            to="/dashboard/inicio"
            className={` nav-link ${
              lastSegment == "inicio" && "bg-primary"
            } text-white d-flex align-items-center fs-6 rounded-0 d-flex flex-column`}
            aria-current="page"
          >
            <House size={20} color="white" />
            <span className="bottom-navbar-label">Inicio</span>
          </Link>
        </li>
        <li className="nav-item link-hover px-0">
          <Link
            to="/dashboard/cuentas"
            className={` nav-link ${
              lastSegment == "cuentas" && "bg-primary"
            } text-white d-flex align-items-center fs-6 rounded-0 d-flex flex-column`}
            aria-current="page"
          >
            <CashStack size={20} color="white" />
            <span className="bottom-navbar-label">Cuentas</span>
          </Link>
        </li>
        <li className="nav-item link-hover px-0">
          <Link
            to="/dashboard/actividad"
            className={` nav-link ${
              lastSegment == "actividad" && "bg-primary"
            } text-white d-flex align-items-center fs-6 rounded-0 d-flex flex-column`}
            aria-current="page"
          >
            <FiPieChart size={20} color="white" />
            <span className="bottom-navbar-label">Actividad</span>
          </Link>
        </li>
        <li className="nav-item link-hover px-0">
          <Link
            to="/dashboard/locales"
            className={` nav-link ${
              lastSegment == "locales" && "bg-primary"
            } text-white d-flex align-items-center fs-6 rounded-0 d-flex flex-column`}
            aria-current="page"
          >
            <Shop size={20} color="white" />
            <span className="bottom-navbar-label">Locales</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNavbar;
