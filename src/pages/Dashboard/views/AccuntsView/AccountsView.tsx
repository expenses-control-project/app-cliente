import { useEffect, useState } from "react";
import TableAccountsComponent from "./components/TableAccountsComponent";
import { Plus } from "react-bootstrap-icons";
import AccountModalComponent from "../../components/Modals/AccountModalComponent";
import { deleteAccountRequest, getAccountsRequest } from "../../../../services/accounts.service";
import useFetchAndLoad from "../../../../hooks/useFetchAndLoad";
import Swal from "sweetalert2";

function AccountsView() {
  const [showModalAccount, setShowModalAccount] = useState(false);
  const [title, setTitle] = useState("");

  const [account, setAccount] = useState([]);
  const [row, setRow] = useState(null);
  const { callEndpoint } = useFetchAndLoad();

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

  const handleDelete = async (id: number) => {
    try {
      Swal.fire({
        title: "Estas seguro",
        text: "No podrás revertirlo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, ¡eliminalo!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await callEndpoint(deleteAccountRequest(id));
          getAccounts();
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);
  return (
    <section className="p-4">
      <div
        className="pb-4 d-flex justify-content-center mb-5 mb-md-0"
        style={{ position: "fixed", bottom: "0", right: "1rem" }}
      >
        <button
          className="btn btn-success rounded-pill d-flex align-items-center"
          style={{ width: "3rem", height: "3rem" }}
          onClick={() => {
            setRow(null);
            handleOpenModalAccount("Crear Cuenta");
          }}
        >
          <Plus size={40} />
        </button>
      </div>
      <TableAccountsComponent
        data={account}
        handleOpen={handleOpenModalAccount}
        handleDelete={handleDelete}
        setRow={setRow}
      />
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
