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
