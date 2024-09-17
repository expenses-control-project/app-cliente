import AccountsComponent from "./components/Accounts/AccountsComponent";
import BalanceComponent from "./components/Balance/BalanceComponent";
import LastActivityComponent from "./components/LastActivity/LastActivityComponent";
import AddAcountComponent from "./components/AddAccount/AddAcountComponent";
import { useState } from "react";
import AccountModalComponent from "../../components/Modals/AccountModalComponent";
import ExpensesModalComponent from "../../components/Modals/ExpensesModalComponent";
import RevenuesModalComponent from "../../components/Modals/RevenuesModalComponent";

function HomeView() {
  const [showModalAccount, setShowModalAccount] = useState(false);
  const [showModalExpenses, setShowModalExpenses] = useState(false);
  const [showModalRevenues, setShowModalRevenues] = useState(false);
  const [title, setTitle] = useState("");

  const handleOpenModalAccount = (title: string) => {
    setShowModalAccount(true);
    setTitle(title)
  };
  
  const handleCloseModalAccount = () => {
    setShowModalAccount(false);
  };

  const handleOpenModalExpenses = (title: string) => {
    setShowModalExpenses(true);
    setTitle(title)
  };
  
  const handleCloseModalExpenses = () => {
    setShowModalExpenses(false);
  };

  const handleOpenModalRevenues = (title: string) => {
    setShowModalRevenues(true);
    setTitle(title)
  };
  
  const handleCloseModalRevenues = () => {
    setShowModalRevenues(false);
  };



  return (
    <section className="d-flex flex-column px-3 px-sm-5 py-4 position-relative">
      <BalanceComponent handleShowExpenses={handleOpenModalExpenses} handleShowRevenues={handleOpenModalRevenues}/>
      <AccountsComponent />
      <LastActivityComponent />
      <AddAcountComponent handleOpen={handleOpenModalAccount}/>
      <AccountModalComponent title={title} show={showModalAccount} handleClose={handleCloseModalAccount}/>
      <RevenuesModalComponent title={title} show={showModalRevenues} handleClose={handleCloseModalRevenues}/>
      <ExpensesModalComponent title={title} show={showModalExpenses} handleClose={handleCloseModalExpenses}/>
    </section>
  );
}

export default HomeView;
