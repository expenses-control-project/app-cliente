import React from "react";
import { Activity, BarChart, House, Shop } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function BottomNavbar() {
  return (
    <nav
      className="d-lg-none bg-body-secondary border-end"
      style={{ width: "100%" }}
    >
      <ul className="nav text-center row">
        <li className="nav-item link-hover border-end col py-2">
          <Link
            to="/dashboard/inicio"
            className="nav-link text-white d-flex align-items-center fs-6 rounded-0 d-flex flex-column"
            aria-current="page"
          >
            <House size={30} color="white" />            
          </Link>
        </li>
        <li className="nav-item link-hover border-end col py-2">
          <Link
            to="/dashboard/movimientos"
            className="nav-link text-white d-flex align-items-center fs-6 rounded-0 d-flex flex-column"
            aria-current="page"
          >
            <Activity size={30} color="white" />
          </Link>
        </li>
        <li className="nav-item link-hover border-end col py-2">
          <Link
            to="/dashboard/establecimientos"
            className="nav-link text-white d-flex align-items-center fs-6 rounded-0 d-flex flex-column"
            aria-current="page"
          >
            <Shop size={30} color="white" />
          </Link>
        </li>
        <li className="nav-item link-hover col py-2">
          <Link
            to="/dashboard/metricas"
            className="nav-link text-white d-flex align-items-center fs-6 rounded-0 d-flex flex-column"
            aria-current="page"
          >
            <BarChart size={30} color="white" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNavbar;
