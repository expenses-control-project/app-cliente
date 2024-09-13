import { Activity, BarChart, House, Shop } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import './BottomNavbar.css'

function BottomNavbar() {
  return (
    <nav
      className="d-lg-none bg-body-secondary border-top"
      style={{ width: "100%", position:"sticky", bottom: 0 }}
    >
      <ul className="nav text-center" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
        <li className="nav-item link-hover py-2 px-0">
          <Link
            to="/dashboard/inicio"
            className="nav-link text-white d-flex align-items-center fs-6 rounded-0 d-flex flex-column"
            aria-current="page"
          >
            <House size={20} color="white" />         
            <span className="bottom-navbar-label">Inicio</span>   
          </Link>
        </li>
        <li className="nav-item link-hover py-2 px-0">
          <Link
            to="/dashboard/actividad"
            className="nav-link text-white d-flex align-items-center fs-6 rounded-0 d-flex flex-column"
            aria-current="page"
          >
            <Activity size={20} color="white" />
            <span className="bottom-navbar-label">Actividad</span>
          </Link>
        </li>
        <li className="nav-item link-hover py-2 px-0">
          <Link
            to="/dashboard/locales"
            className="nav-link text-white d-flex align-items-center fs-6 rounded-0 d-flex flex-column"
            aria-current="page"
          >
            <Shop size={20} color="white" />
            <span className="bottom-navbar-label">Locales</span>
          </Link>
        </li>
        <li className="nav-item link-hover py-2 px-0">
          <Link
            to="/dashboard/metricas"
            className="nav-link text-white d-flex align-items-center fs-6 rounded-0 d-flex flex-column"
            aria-current="page"
          >
            <BarChart size={20} color="white" />
            <span className="bottom-navbar-label">Metricas</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNavbar;
