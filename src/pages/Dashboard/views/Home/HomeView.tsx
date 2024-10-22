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
import LastActivityComponent from "./components/LastActivity/LastActivityComponent";
import { getRevenuesRequest } from "../../../../services/revenues.service";
import { getExpensesRequest } from "../../../../services/expenses.service";

function HomeView() {
  const [showModalExpenses, setShowModalExpenses] = useState(false);
  const [showModalRevenues, setShowModalRevenues] = useState(false);
  const [title, setTitle] = useState("");
  const [account, setAccount] = useState([]);
  const [totalSaldo, setTotalSaldo] = useState(0);
  const [activity, setActivity] = useState<any | null>();

  const { loading, callEndpoint } = useFetchAndLoad();

  // Modals
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

  // Obtenemos un resumen de nuestras actividades
  const getAllActivity = async () => {
    const res_revenues = await callEndpoint(getRevenuesRequest());
    const res_data = res_revenues?.data.ingreso;
    const data_revenues = res_data.map((item: any) => ({
      ...item,
      flag: "ingreso",
    }));

    const res_expenses = await callEndpoint(getExpensesRequest());
    const res_data2 = res_expenses?.data.gasto;
    const data_expenses = res_data2.map((item: any) => ({
      ...item,
      flag: "gasto",
    }));

    const result = [...data_revenues, ...data_expenses];

    const resultFIlterDate = result.sort((a, b) => {
      return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
    });

    const resultLast3Items = resultFIlterDate.slice(0, 3);
    setActivity(resultLast3Items);
  };

  useEffect(() => {
    getAccounts();
    getAllActivity();
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
              <LastActivityComponent loading={loading} activity={activity}/>
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
        getAllActivity={getAllActivity}
      />
      <ExpensesModalComponent
        title={title}
        show={showModalExpenses}
        accounts={account}
        handleClose={handleCloseModalExpenses}
        getAccounts={getAccounts}
        getAllActivity={getAllActivity}
      />
    </section>
  );
}

export default HomeView;
