import { useEffect, useState } from "react";
import TableAccountsComponent from "./components/TableAccountsComponent";
import { Plus } from "react-bootstrap-icons";
import AccountModalComponent from "../../components/Modals/AccountModalComponent";
import { getAccountsRequest } from "../../../../services/accounts.service";
import useFetchAndLoad from "../../../../hooks/useFetchAndLoad";

function AccountsView() {
  const [showModalAccount, setShowModalAccount] = useState(false);
  const [title, setTitle] = useState("");

  const [account, setAccount] = useState([]);
  const [row, setRow] = useState(null);
  const { loading, callEndpoint } = useFetchAndLoad();

  const handleOpenModalAccount = (title: string) => {
    setShowModalAccount(true);
    setTitle(title);
  };

  const handleCloseModalAccount = () => {
    setShowModalAccount(false);
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
    <section className="p-4">
      <div className="pb-4 d-flex justify-content-center">
        <button className="btn btn-success rounded-pill d-flex gap-1 align-items-center" onClick={() => {
          handleOpenModalAccount("Crear Cuenta")
        }}>
          <Plus size={20} /> AGREGAR CUENTA
        </button>
      </div>
      <TableAccountsComponent data={account} />
      <AccountModalComponent
        title={title}
        show={showModalAccount}
        handleClose={handleCloseModalAccount}
        row={row}
        handleGetAccounts={getAccounts}
      />
    </section>
  );
}

export default AccountsView;
