import { Button, Card } from "react-bootstrap";
import { Table } from "react-bootstrap";
import {
  Bank,
  Bank2,
  Cash,
  Pencil,
  PencilFill,
  TrashFill,
  Wallet2,
} from "react-bootstrap-icons";

interface TableAccountsProps {
  data: any;
}

interface IconTipoTableProps {
  tipoCuenta: number;
}

function IconTipoTable({ tipoCuenta }: IconTipoTableProps) {
  switch (tipoCuenta) {
    case 1:
      return <Cash size={30} />;
    case 2:
      return <Bank2 size={30} />;
    case 3:
      return <Wallet2 size={30} />;
  }
}

function TableAccountsComponent({ data }: TableAccountsProps) {
  const handleEdit = (id: number) => {
    console.log(`Editando elemento con ID: ${id}`);
  };

  // Función para manejar la acción de eliminar
  const handleDelete = (id: number) => {
    console.log(`Eliminando elemento con ID: ${id}`);
  };

  return (
    <Card>
      <Table striped hover borderless={true} responsive className="caption-top">
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
          {data.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center">
                No hay cuentas
              </td>
            </tr>
          ) : (
            data.map((item: any, index: number) => (
              <tr key={index}>
                <td>{item.nombre}</td>
                <td>{item.descripcion}</td>
                <td>$ {item.saldo}</td>
                <td>
                  <IconTipoTable tipoCuenta={item.tipoCuenta} />
                </td>
                <td>
                  <div className="d-flex flex-row gap-4">
                    <PencilFill className="bg-warning p-1 rounded-circle text-black btn" size={25} />
                    <TrashFill className="bg-danger p-1 rounded-circle btn" size={25} />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Card>
  );
}

export default TableAccountsComponent;
