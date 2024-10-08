import { Button, FloatingLabel, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import useFetchAndLoad from "../../../../hooks/useFetchAndLoad";
import { useForm } from "react-hook-form";
import {
  patchAccountRequest,
  postAccountRequest,
} from "../../../../services/accounts.service";

interface AccountModalProps {
  title: string;
  show: boolean;
  row: any;
  handleGetAccounts: () => void;
  handleClose: () => void;
}

function AccountModalComponent({
  title,
  show,
  row,
  handleClose,
  handleGetAccounts,
}: AccountModalProps) {
  const { callEndpoint } = useFetchAndLoad();
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = handleSubmit(async (data: any) => {
    try {
      data.saldo = parseInt(data.saldo);
      data.tipoCuenta = parseInt(data.tipoCuenta);

      if (row != null) {
        data.idCuenta = row.idCuenta;
        await callEndpoint(patchAccountRequest(data));
      } else {
        await callEndpoint(postAccountRequest(data));
      }
      handleGetAccounts();
      setValue("nombre", "");
      setValue("saldo", "");
      setValue("descripcion", "");
      setValue("tipoCuenta", "0");
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="fade "
      fullscreen={"sm-down"}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <FloatingLabel
              controlId="floatingInput"
              label="Nombre"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="example"
                {...register("nombre")}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <FloatingLabel
              controlId="floatingInput"
              label="Saldo"
              className="mb-3"
            >
              <Form.Control
                type="number"
                placeholder="123456"
                {...register("saldo")}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <FloatingLabel controlId="floatingTextarea2" label="Descripción">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                {...register("descripcion")}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <FloatingLabel controlId="floatingSelect" label="Tipo de cuenta">
              <Form.Select
                aria-label="Floating label select example"
                {...register("tipoCuenta")}
              >
                <option>Seleccionar un tipo</option>
                <option value="1">En efectivo</option>
                <option value="2">Bancaria</option>
                <option value="3">Billetera virtual</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button type="submit" variant="primary">
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AccountModalComponent;
