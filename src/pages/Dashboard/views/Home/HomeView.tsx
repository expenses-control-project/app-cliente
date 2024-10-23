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
    let result: any[] = [];
    let data_revenues: any[] = [];
    let data_expenses: any[] = [];

    try {
      const res_revenues = await callEndpoint(getRevenuesRequest());
      const res_data = res_revenues?.data.ingreso;
      data_revenues = res_data.map((item: any) => ({
        ...item,
        flag: "ingreso",
      }));
      result = [...data_revenues];
    } catch (error: any) {
      console.error(error.response?.data);
      result = [];
    }

    try {
      const res_expenses = await callEndpoint(getExpensesRequest());
      const res_data2 = res_expenses?.data.gasto;
      data_expenses = res_data2?.map((item: any) => ({
        ...item,
        flag: "gasto",
      }));
      result = [...data_revenues, ...data_expenses];
    } catch (error: any) {
      console.error(error.response?.data);
      result = [...data_revenues];
    }

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
    <section className="ps-3 pe-3 pe-sm-5 ps-sm-5 py-4 position-relative container-home">
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
            <div className="d-flex flex-column align-items-center justify-content-center" style={{height: "100%"}}>
              <Lottie
                animationData={welcome_animation}
                style={{ maxWidth: "20rem", height: "20rem" }}
              />
              <h1 className="fs-2">Bienvenido/a 👋 </h1>
              <p className="fs-6 text-center">
                Para empezar a administrar tus gastos, primero tenes que crear
                una cuenta y luego un local
              </p>
              <div className="d-flex flex-column justify-content-center flex-sm-row gap-2" style={{width: "100%"}}>
                <Link to="/dashboard/cuentas" className="btn btn-block btn-primary">
                  Ir a cuentas
                </Link>
                <Link to="/dashboard/cuentas" className="btn btn-secondary">
                  Ir a locales
                </Link>
              </div>
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
