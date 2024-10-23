import { Card, CardHeader, Table } from "react-bootstrap";
import {
  Bank2,
  Cash,
  PencilFill,
  Wallet2,
} from "react-bootstrap-icons";
import { formatCurrency } from "../../../../../utils/formatterValue.util";
import { Dispatch, SetStateAction } from "react";
import Lottie from "lottie-react";

import accounts_animation from "../../../../../assets/lottie/ingresos_animation.json";

interface TableAccountsProps {
  data: any;
  setRow: Dispatch<SetStateAction<null>>;
  handleOpen: (title: string) => void;
  handleDelete: (id: number) => void;
}

interface IconTipoTableProps {
  tipoCuenta: number;
  size: number;
}

function IconTipoTable({ tipoCuenta, size }: IconTipoTableProps) {
  switch (tipoCuenta) {
    case 1:
      return <Cash size={size} />;
    case 2:
      return <Bank2 size={size} />;
    case 3:
      return <Wallet2 size={size} />;
  }
}

function TableAccountsComponent({
  data,
  setRow,
  handleOpen,
}: TableAccountsProps) {
  return (
    <>
      <div className="d-none d-lg-table" style={{ width: "100%", height: "100%" }}>
        {data.length > 0 ? (
          <Card>
            <CardHeader className="d-flex align-items-center">
              <h2 className="fs-5">Todas las cuentas</h2>
            </CardHeader>
            <Table
              striped
              hover
              borderless={true}
              responsive
              className="caption-top"
            >
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Saldo</th>
                  <th>Tipo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, index: number) => (
                  <tr key={index}>
                    <td data-label="Nombre">{item.nombre}</td>
                    <td data-label="Descripción">{item.descripcion}</td>
                    <td data-label="Saldo">{formatCurrency(item.saldo)}</td>
                    <td data-label="Tipo">
                      <IconTipoTable size={30} tipoCuenta={item.tipoCuenta} />
                    </td>
                    <td data-label="Acciones">
                      <div className="d-flex flex-row gap-4">
                        <PencilFill
                          className="bg-warning p-1 rounded-circle text-black btn"
                          size={25}
                          onClick={() => {
                            setRow(item);
                            handleOpen("Editar Cuenta");
                          }}
                        />
                        {/*<TrashFill
                      className="bg-danger p-1 rounded-circle btn"
                      size={25}
                      onClick={() => {
                        handleDelete(item.idCuenta);
                      }}
                    />*/}
                      </div>
                    </td>
                  </tr>
                ))}
                )
              </tbody>
            </Table>
          </Card>
        ) : (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: "100%" }}
          >
            <Lottie
              animationData={accounts_animation}
              style={{ maxWidth: "10rem", height: "10rem" }}
            />
            <h2 className="text-center">No hay cuentas creadas</h2>
            <p className="text-center w-50">
              Para agregar una nueva cuenta, haz clic en el botón{" "}
              <strong>+</strong> que encontrarás en la esquina inferior derecha.
              Completa la información requerida y guarda los cambios para añadir
              la cuenta.
            </p>
          </div>
        )}
      </div>
      <div className="d-lg-none cuentas" style={{ height: "100%" }}>
        {data.lenght > 0 ? (
          <>
            {data.map((item: any, index: number) => (
              <div
                className="d-flex flex-column gap-2 mb-3 cuenta-item"
                key={index}
              >
                <div>
                  <IconTipoTable size={40} tipoCuenta={item.tipoCuenta} />
                </div>
                <div className="d-flex flex-column" style={{ width: "100%" }}>
                  <div>
                    <h2 className="fs-4 m-0">{item.nombre}</h2>
                    <p className="fs-6 m-0 mb-2">{item.descripcion}</p>
                    <h3 className="fs-2">{formatCurrency(item.saldo)}</h3>
                  </div>
                  <div className="d-flex flex-row justify-content-between gap-2">
                    <button
                      className="btn btn-warning rounded-pill"
                      style={{ width: "100%" }}
                      onClick={() => {
                        setRow(item);
                        handleOpen("Editar Cuenta");
                      }}
                    >
                      <PencilFill className="text-black" size={20} />
                    </button>
                    {/*<button
                    className="btn btn-danger rounded-pill"
                    style={{ width: "100%" }}
                    onClick={() => {
                      handleDelete(item.idCuenta);
                    }}
                  >
                    <TrashFill size={20} />
                  </button>*/}
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: "100%" }}
          >
            <Lottie
              animationData={accounts_animation}
              style={{ maxWidth: "10rem", height: "10rem" }}
            />
            <h2 className="text-center">No hay cuentas creadas</h2>
            <p className="text-center w-75">
              Para agregar una nueva cuenta, haz clic en el botón{" "}
              <strong>+</strong> que encontrarás en la esquina inferior derecha.
              Completa la información requerida y guarda los cambios para añadir
              la cuenta.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default TableAccountsComponent;
