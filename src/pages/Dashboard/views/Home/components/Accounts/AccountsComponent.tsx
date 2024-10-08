import IconAccountComponent from "../IconAccount/IconAccountComponent";

import "./AccountsComponent.css";
interface AccountsProps {
  accounts: any;
}

function AccountsComponent({ accounts }: AccountsProps) {

  return (
    <>
      <article className="d-flex flex-column mt-4">
        <h1 className="fs-6">Cuentas</h1>
        <div className="d-flex flex-wrap gap-2 ">
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
                <h1 className="fs-2">$ {a.saldo}</h1>
              </div>
              <IconAccountComponent tipoCuenta={a.tipoCuenta} />
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

export default AccountsComponent;
