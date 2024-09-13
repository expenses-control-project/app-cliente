import { ArrowBarDown, ArrowBarUp } from "react-bootstrap-icons";

function BalanceComponent() {
  return (
    <article>
      <div>
        <h4 className="fs-5">Saldo disponible</h4>
        <h2 className="fs-2">$300.000</h2>
      </div>
      <div className=" d-grid d-sm-flex flex-column flex-sm-row gap-2 mt-2">
        <button className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2 rounded-pill" >
          <ArrowBarUp size={20} />
          Ingresar
        </button>
        <button className="btn btn-outline-danger btn-lg d-flex align-items-center justify-content-center gap-2 rounded-pill" >
          <ArrowBarDown size={20} />
          Gasto
        </button>
      </div>
    </article>
  );
}

export default BalanceComponent;
