import { Link } from "react-router-dom";
import IconAccountComponent from "../IconAccount/IconAccountComponent";

import "./AccountsComponent.css";
import { formatCurrency } from "../../../../../../utils/formatterValue.util";
interface AccountsProps {
  accounts: any;
}


function AccountsComponent({ accounts }: AccountsProps) {
  return (
    <article className="d-flex flex-column mt-4">
      <div className="d-flex flex-row justify-content-between pe-3 pe-sm-5">
        <h1 className="fs-5">Cuentas</h1>
        <Link
          to="/dashboard/cuentas"
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          Ver cuentas
        </Link>
      </div>
      <div className="flex-lg-row gap-2 scroll-container">
        {accounts.map((a: any, index: number) => (
          <div
            key={index}
            className={`${
              a.tipoCuenta == 1
                ? "account-cash"
                : a.tipoCuenta == 2
                ? "account-banck"
                : a.tipoCuenta == 3
                ? "account-wallet"
                : ""
            } d-flex justify-content-between `}
          >
            <div>
              <h2 className="fs-4">{a.nombre}</h2>
              <h1 className="fs-2">{formatCurrency(a.saldo)}</h1>
            </div>
            <IconAccountComponent tipoCuenta={a.tipoCuenta} />
          </div>
        ))}
      </div>
    </article>
  );
}

export default AccountsComponent;
