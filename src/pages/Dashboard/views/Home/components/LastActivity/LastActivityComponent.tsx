import {
  ArrowRight,
  ArrowUpCircle,
} from "react-bootstrap-icons";
import { FaRunning } from "react-icons/fa";
import { FaBus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function LastActivityComponent() {
  return (
    <article className="mt-4">
      <div
        className="d-flex flex-row justify-content-between"
        style={{ width: "100%" }}
      >
        <h1 className="fs-6">Tu última actividad</h1>
      </div>
      <div className="bg-body-secondary rounded mt-2">
        <div className="d-flex gap-2 p-2 flex-row justify-content-between align-items-center">
          <div className="d-flex gap-2">
            <div>
              <FaRunning className="bg-danger rounded-pill p-1" size={40} />
            </div>
            <div>
              <h4 className="fs-5 mb-0">Porto GYM</h4>
              <p className="mb-0 text fs-6 text-body-secondary">
                Salud y Bienestar
              </p>
            </div>
          </div>
          <div
            className="d-flex flex-column align-items-end"
            style={{ width: "8rem" }}
          >
            <span className="text-danger">-$3.000,00</span>
            <span>03/09</span>
          </div>
        </div>
        <div className="d-flex gap-2 p-2 flex-row justify-content-between align-items-center">
          <div className="d-flex gap-2">
            <div>
              <FaBus className="bg-danger rounded-pill p-2" size={40} />
            </div>
            <div>
              <h4 className="fs-5 mb-0">SUBE</h4>
              <p className="mb-0 text fs-6 text-body-secondary">
                Transporte y Logística
              </p>
            </div>
          </div>
          <div
            className="d-flex flex-column align-items-end"
            style={{ width: "8rem" }}
          >
            <span className="text-danger">-$2.000,00</span>
            <span>03/09</span>
          </div>
        </div>
        <div className="d-flex gap-2 p-2 flex-row justify-content-between align-items-center">
          <div className="d-flex gap-2">
            <div>
              <ArrowUpCircle
                className="bg-success rounded-circle p-2"
                size={40}
              />
            </div>

            <div>
              <h4 className="fs-5 mb-0">Efectivo</h4>
              <p className="mb-0 text fs-6 text-body-secondary">Ingreso</p>
            </div>
          </div>
          <div className="d-flex flex-column align-items-end">
            <span className="text-success">+$10.000,00</span>
            <span>03/09</span>
          </div>
        </div>
        <div className="p-2 border-top">
          <Link
            to="/activida"
            className="nav-link d-flex align-items-center justify-content-between"
          >
            Ver toda tu actividad
            <ArrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default LastActivityComponent;
