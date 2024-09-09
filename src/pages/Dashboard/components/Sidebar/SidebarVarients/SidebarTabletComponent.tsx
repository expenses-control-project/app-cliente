import { OverlayTrigger, Tooltip} from "react-bootstrap";
import { Activity, BarChart, House, Shop } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import logo_ec from "../../../../../assets/logo_ec.svg";

interface SidebarTablerProps {
  id: string,
  children: any,
  title: string,
  to: string
}

function SidebarTabletComponent() {
  const LinkTooltip = ({ id, children, title, to }: SidebarTablerProps) => (
    <OverlayTrigger placement="right" overlay={<Tooltip style={{marginLeft: "1.5rem"}} id={id}>{title}</Tooltip>}>
      <Link to={to}>{children}</Link>
    </OverlayTrigger>
  );
  return (
    <nav
      className="d-none d-lg-flex d-max-xl-flex flex-column flex-shrink-0 bg-body-secondary"
      style={{width: "4.5rem", height: "100vh"}}
    >
      <div
        className="d-block p-3 link-dark text-decoration-none mb-3"
      >
        <img src={logo_ec} alt="Logo expenses control" width={40} height={40} />
      </div>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item ">
          <LinkTooltip title="Inicio" id="t-1" to="/dashboard/inicio" >
            <House size={30} color="white"/>
          </LinkTooltip>
        </li>
        <hr />
        <li className="nav-item">
          <LinkTooltip title="Movimientos" id="t-1" to="/dashboard/movimientos" >
            <Activity size={30} color="white"/>
          </LinkTooltip>
        </li>
        <hr />
        <li className="nav-item">
          <LinkTooltip title="Establecimientos" id="t-1" to="/dashboard/establecimientos" >
            <Shop size={30} color="white"/>
          </LinkTooltip>
        </li>
        <hr />
        <li className="nav-item">
          <LinkTooltip title="Metricas" id="t-1" to="/dashboard/metricas" >
            <BarChart size={30} color="white"/>
          </LinkTooltip>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarTabletComponent;
