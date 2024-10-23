import { useEffect, useState } from "react";
import EstablishmentsModalComponent from "../../components/Modals/EstablishmentsModalComponent";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
import { MdAdd } from "react-icons/md";
import useFetchAndLoad from "../../../../hooks/useFetchAndLoad";
import {
  deleteEstablishmentRequest,
  getEstablishmentsRequest,
} from "../../../../services/establishments.service";
import IconsRubrosComponent from "../../../../components/icons/IconsRubrosComponent";
import LoaderComponent from "../../../../components/Loader/LoaderComponent";
import Swal from "sweetalert2";

import "./EstablishmentsViewStyles.css";
import establishment from "../../../../assets/lottie/establecimiento_animation.json"
import Lottie from "lottie-react";

function EstablishmentsView() {
  const [showModalEstablishments, setShowModalEstablishments] = useState(false);
  const [title, setTitle] = useState("");

  const [establishments, setEstablishments] = useState([]);
  const [row, setRow] = useState(null);
  const { callEndpoint, loading } = useFetchAndLoad();

  const handleOpenModalAccount = (title: string) => {
    setRow(null);
    setTitle(title);
    setShowModalEstablishments(true);
  };

  const handleCloseModalAccount = () => {
    setShowModalEstablishments(false);
  };

  const getAllEstablishments = async () => {
    try {
      const res = await callEndpoint(getEstablishmentsRequest());
      setEstablishments(res?.data.establecimiento);
    } catch (error: any) {
      if (error.response.data.statusCode == 404) {
        setEstablishments([]);
      }
    }
  };

  useEffect(() => {
    getAllEstablishments();
  }, []);

  const updateEstablishment = (title: string, row: any) => {
    setRow(row);
    setTitle(title);
    setShowModalEstablishments(true);
  };

  const deleteEstablishments = (id: number) => {
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
          await callEndpoint(deleteEstablishmentRequest(id));
          getAllEstablishments();
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      className="px-2 py-2 px-sm-5 py-sm-4 container-establishments"
      style={{ height: "calc(100vh - 57px)" }}
    >
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          {establishments.length > 0 ? (
            <div className="card ">
              <div className="card-header bg-body-secondary d-flex flex-row justify-content-between align-items-center gap-3">
                <h2 className="fs-5">Todos los locales</h2>
              </div>
              <div className=" card-body d-flex flex-column gap-2">
                {establishments.map((e: any, index) => (
                  <div
                    className="d-flex gap-2 p-2 flex-row justify-content-between align-items-center"
                    key={index}
                  >
                    <div>
                      <div>
                        <IconsRubrosComponent
                          bg={"bg-secondary"}
                          idRubro={e.idRubro}
                        />
                      </div>
                      <div>
                        <h4 className="fs-5 mt-2 mb-0">{e.nombreEstablecimiento}</h4>
                        <p className="mb-0 text fs-6 text-body-secondary">
                          {e.rubro.nombreRubro}
                        </p>
                      </div>
                    </div>
                    <div className=" d-flex gap-2">
                      <button
                        className="btn btn-warning rounded-pill"
                        onClick={() => {
                          updateEstablishment("Editar Local", e);
                        }}
                      >
                        {" "}
                        <PencilFill size={20} />
                      </button>
                      <button
                        onClick={() => {
                          deleteEstablishments(e.idEstablecimiento);
                        }}
                        className="btn btn-danger rounded-pill"
                      >
                        {" "}
                        <Trash3Fill size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: "100%" }}
          >
            <Lottie
              animationData={establishment}
              style={{ maxWidth: "20rem", height: "12rem" }}
            />
            <h2 className="text-center">No hay locales creados</h2>
            <p className="text-center w-75">
              Para agregar un nuevo local, haz clic en el botón{" "}
              <strong>+</strong> que encontrarás en la esquina inferior derecha.
              Completa la información requerida y guarda los cambios para añadirlo.
            </p>
          </div>
          )}
        </>
      )}

      <div
        className="pb-4 d-flex justify-content-center mb-5 mb-lg-0"
        style={{ position: "fixed", bottom: "0", right: "1rem" }}
      >
        <button
          className="btn btn-success rounded-pill d-flex flex-row align-items-center gap-2"
          onClick={() => {
            handleOpenModalAccount("Crear un local");
          }}
        >
          Local <MdAdd size={20} />
        </button>
      </div>
      <EstablishmentsModalComponent
        title={title}
        row={row}
        show={showModalEstablishments}
        handleClose={handleCloseModalAccount}
        handleGetEstablishments={getAllEstablishments}
      />
    </section>
  );
}

export default EstablishmentsView;
