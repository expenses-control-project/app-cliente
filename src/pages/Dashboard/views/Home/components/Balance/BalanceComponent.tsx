import { ArrowBarDown, ArrowBarUp } from "react-bootstrap-icons";
import { formatCurrency } from "../../../../../../utils/formatterValue.util";

interface BalanceProps {
  handleShowExpenses: (title: string) => void,
  handleShowRevenues: (title: string) => void,
  saldoTotal: number
}

function BalanceComponent({saldoTotal, handleShowExpenses, handleShowRevenues}: BalanceProps) {
  return (
    <article className="pe-3">
      <div>
        <h4 className="fs-5">Saldo disponible</h4>
        <h2 className="fs-2">{formatCurrency(saldoTotal)}</h2>
      </div>
      <div className=" d-grid d-sm-flex flex-column flex-sm-row gap-2 mt-2">
        <button className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2 rounded-pill" 
          onClick={() => {
            handleShowRevenues("Crear un ingreso")
          }}>
          <ArrowBarUp size={20} />
          Ingreso
        </button>
        <button className="btn btn-outline-danger btn-lg d-flex align-items-center justify-content-center gap-2 rounded-pill" 
        onClick={() => {
          handleShowExpenses("Cargar un gasto")
        }}>
          <ArrowBarDown size={20} />
          Gasto
        </button>
      </div>
    </article>
  );
}

export default BalanceComponent;
