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
import { Link } from "react-router-dom";

function HomeView() {
  const [showModalExpenses, setShowModalExpenses] = useState(false);
  const [showModalRevenues, setShowModalRevenues] = useState(false);
  const [title, setTitle] = useState("");

  const [account, setAccount] = useState([]);
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
      setAccount(res?.data.cuenta);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <section className="d-flex flex-column px-3 px-sm-5 py-4 position-relative">
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          {account.length > 0 ? (
            <>
              <BalanceComponent
                handleShowExpenses={handleOpenModalExpenses}
                handleShowRevenues={handleOpenModalRevenues}
              />
              <AccountsComponent accounts={account} />
              
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
              <Link to="/dashboard/cuentas" className="btn btn-primary">Ir a cuentas</Link>
            </div>
          )}
        </>
      )}
      <RevenuesModalComponent
        title={title}
        show={showModalRevenues}
        handleClose={handleCloseModalRevenues}
      />
      <ExpensesModalComponent
        title={title}
        show={showModalExpenses}
        handleClose={handleCloseModalExpenses}
      />
    </section>
  );
}

export default HomeView;
