import AccountsComponent from "./components/Accounts/AccountsComponent";
import BalanceComponent from "./components/Balance/BalanceComponent";
import { useEffect, useState } from "react";
import ExpensesModalComponent from "../../components/Modals/ExpensesModalComponent";
import RevenuesModalComponent from "../../components/Modals/RevenuesModalComponent";
import useFetchAndLoad from "../../../../hooks/useFetchAndLoad";
import { getAccountsRequest } from "../../../../services/accounts.service";
import LoaderComponent from "../../../../components/Loader/LoaderComponent";
import Lottie from "lottie-react";

import welcome_animation from "../../../../assets/lottie/welcome.json";
import waiting_activity from "../../../../assets/lottie/waiting_activity.json";
import { Link } from "react-router-dom";

function HomeView() {
  const [showModalExpenses, setShowModalExpenses] = useState(false);
  const [showModalRevenues, setShowModalRevenues] = useState(false);
  const [title, setTitle] = useState("");
  const [account, setAccount] = useState([]);
  const [totalSaldo, setTotalSaldo] = useState(0);

  const { loading, callEndpoint } = useFetchAndLoad();

  const handleOpenModalExpenses = (title: string) => {
    setShowModalExpenses(true);
    setTitle(title);
  };

  const handleCloseModalExpenses = () => {
    setShowModalExpenses(false);
  };

  const handleOpenModalRevenues = (title: string) => {
    setShowModalRevenues(true);
    setTitle(title);
  };

  const handleCloseModalRevenues = () => {
    setShowModalRevenues(false);
  };

  // Obtenemos las diferentes cuentas
  const getAccounts = async () => {
    try {
      const res = await callEndpoint(getAccountsRequest());
      const total = await calculateTotalSaldo(res?.data.cuenta);
      setTotalSaldo(total);
      setAccount(res?.data.cuenta);
    } catch (error) {
      console.error(error);
    }
  };

  async function calculateTotalSaldo(data: any) {
    const total = data.reduce((acc: any, d: any) => acc + d.saldo, 0);
    return total;
  }

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <section className="ps-3 ps-sm-5 px-lg-5 py-4 position-relative">
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          {account.length > 0 ? (
            <>
              <BalanceComponent
                saldoTotal={totalSaldo}
                handleShowExpenses={handleOpenModalExpenses}
                handleShowRevenues={handleOpenModalRevenues}
              />
              <AccountsComponent accounts={account} />
              <div className="mt-4 pe-3">
                <div className="d-flex flex-row justify-content-between">
                  <h4 className="fs-5">Mi actividad</h4>
                  <Link
                    to="/dashboard/actividad"
                    className="link-offset-2 link-underline link-underline-opacity-0"
                  >
                    Ver más
                  </Link>
                </div>
                <div className="card mb-5">
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h4 className="fs-5 m-0  text-center">Sin actividades por el momento</h4>
                    <p className="fs-6 m-0 text-center" >Esos gastos no se controlan solos 😎</p>
                    <Lottie
                      animationData={waiting_activity}
                      style={{ maxWidth: "100%", height: "15rem" }}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="d-flex flex-column align-items-center justify-content-center">
              <Lottie
                animationData={welcome_animation}
                style={{ maxWidth: "20rem", height: "20rem" }}
              />
              <h1 className="fs-2">Bienvenido/a 👋 </h1>
              <p className="fs-6 w-50 text-center">
                Para empezar a administrar tus gastos, primero tenes que crear
                una cuenta
              </p>
              <Link to="/dashboard/cuentas" className="btn btn-primary">
                Ir a cuentas
              </Link>
            </div>
          )}
        </>
      )}
      <RevenuesModalComponent
        title={title}
        cuentas={account}
        show={showModalRevenues}
        handleClose={handleCloseModalRevenues}
        getAccounts={getAccounts}
      />
      <ExpensesModalComponent
        title={title}
        show={showModalExpenses}
        accounts={account}
        handleClose={handleCloseModalExpenses}
        getAccounts={getAccounts}
      />
    </section>
  );
}

export default HomeView;
