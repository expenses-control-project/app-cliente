import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useFetchAndLoad from "../../../../hooks/useFetchAndLoad";
import { postRevenueRequest } from "../../../../services/revenues.service";
import { useState } from "react";
import ToastComponent from "../../../../components/Toast/ToastComponent";

interface RevenuesModalProps {
  title: string;
  show: boolean;
  cuentas: object[];
  handleClose: () => void;
  getAccounts: () => void;
  getAllActivity: () => void;
}

function RevenuesModalComponent({
  title,
  show,
  cuentas,
  handleClose,
  getAccounts,
  getAllActivitys
}: RevenuesModalProps) {
  const [text, setText] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setText("Ingreso agregado con exito!!");
    setShowToast(true);
  };
  const handleCloseToast = () => setShowToast(false);

  const fecha_actual = new Date();

  const year = fecha_actual.getFullYear();
  const month = String(fecha_actual.getMonth() + 1).padStart(2, "0");
  const day = String(fecha_actual.getDate()).padStart(2, "0");

  const fecha_formateada = `${year}-${month}-${day}`;

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      saldo: "",
      idCuenta: "0",
    },
  });

  const { callEndpoint } = useFetchAndLoad();

  const onSubmit = handleSubmit(async (data: any) => {
    try {
      data.idCuenta = parseInt(data.idCuenta);
      data.saldo = parseInt(data.saldo);
      data.fecha = fecha_formateada;
      const res = await callEndpoint(postRevenueRequest(data));
      if (res?.data.statusCode == 201) {
        getAccounts();
        getAllActivity();
        handleClose();
        handleShowToast();
        reset({
          saldo: "",
          idCuenta: "0",
        });
      }
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <>
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
                label="Saldo"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="1000"
                  {...register("saldo", {
                    required: true,
                  })}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <FloatingLabel controlId="floatingSelect" label="Cuentas">
                <Form.Select
                  aria-label="Floating label select example"
                  {...register("idCuenta", {
                    required: true,
                  })}
                >
                  <option value="0">Seleccionar una cuenta</option>
                  {cuentas.map((item: any, index: number) => (
                    <option key={index} value={item.idCuenta}>
                      {item.nombre}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastComponent
        position="top-center"
        bg="success"
        text={text}
        show={showToast}
        handleCloseToast={handleCloseToast}
      />
    </>
  );
}

export default RevenuesModalComponent;
