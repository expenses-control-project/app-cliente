import { ArrowUpCircle, Funnel, Search } from "react-bootstrap-icons";
import { FaBus, FaRunning } from "react-icons/fa";

function MovementsView() {
  return (
    <section className="px-3 py-4  px-sm-5 ">
      <div className="card">
        <div className="card-header bg-body-secondary d-flex gap-3">
          <div className="input-group flex-nowrap">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar actividad"
              aria-label="Buscar"
              aria-describedby="addon-wrapping"
            />
            <span className="input-group-text" id="addon-wrapping">
              <Search size={20} />
            </span>
          </div>
          <button className="btn btn-outline-secondary rounded-pill d-flex flex-row align-items-center gap-2">
            {" "}
            <Funnel size={20} />
            Filtros
          </button>
        </div>
        <div className=" card-body d-flex flex-column gap-2">
          <div>
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
          </div>
          <div className="d-flex flex-row justify-content-end ">
            <nav aria-label="Navegación de actividades">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Anterior
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Siguiente
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovementsView;
