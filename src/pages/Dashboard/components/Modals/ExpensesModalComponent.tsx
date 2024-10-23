import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { getEstablishmentsRequest } from "../../../../services/establishments.service";
import { useEffect, useState } from "react";
import useFetchAndLoad from "../../../../hooks/useFetchAndLoad";
import { postExpenseRequest } from "../../../../services/expenses.service";
import ToastComponent from "../../../../components/Toast/ToastComponent";

interface ExpensesModalProps {
  title: string;
  show: boolean;
  accounts: object[];
  handleClose: () => void;
  getAccounts: () => void;
  getAllActivity: () => void;
}

function ExpensesModalComponent({
  title,
  show,
  accounts,
  handleClose,
  getAccounts,
  getAllActivity
}: ExpensesModalProps) {
  const [establishments, setEstablishments] = useState([]);
  const [text, setText] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setText("Gasto aplicado con exito!!");
    setShowToast(true);
  };
  const handleCloseToast = () => setShowToast(false);

  const { callEndpoint } = useFetchAndLoad();
  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      monto: "",
      descripcion: "",
      idEstablecimiento: "0",
      idsCuentas: "0",
    },
  });

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

  const fecha_actual = new Date();

  const year = fecha_actual.getFullYear();
  const month = String(fecha_actual.getMonth() + 1).padStart(2, "0");
  const day = String(fecha_actual.getDate()).padStart(2, "0");

  const hours = String(fecha_actual.getHours()).padStart(2, "0");
  const minutes = String(fecha_actual.getMinutes()).padStart(2, "0");
  const seconds = String(fecha_actual.getSeconds()).padStart(2, "0");
  
  const fecha_formateada = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  const onSubmit = handleSubmit(async (data: any) => {
    try {
      data.fecha = fecha_formateada;
      data.idEstablecimiento = parseInt(data.idEstablecimiento);
      data.monto = parseInt(data.monto);
      data.idsCuentas = data.idsCuentas.map((item: any) => {
        return parseInt(item);
      });
      const res = await callEndpoint(postExpenseRequest(data));
      if (res?.data.statusCode == 201) {
        getAccounts();
        getAllActivity();
        handleClose();
        handleShowToast();
        reset({
          monto: "",
          descripcion: "",
          idEstablecimiento: "0",
          idsCuentas: ""
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
                label="Monto"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="1000"
                  {...register("monto", {
                    required: true,
                  })}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripción del gasto</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                {...register("descripcion", {
                  required: true,
                })}
              />
            </Form.Group>
            <Form.Group controlId="multiSelect" className="mb-3">
              <Form.Label>Selecciona una o varias cuentas:</Form.Label>
              <Form.Control
                as="select"
                multiple
                {...register("idsCuentas", {
                  required: "Debes seleccionar al menos una opción",
                })}
              >
                {accounts.map((item: any, index: number) => (
                  <option key={index} value={item.idCuenta}>
                    {item.nombre}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <FloatingLabel controlId="floatingSelect" label="Locales">
                <Form.Select
                  aria-label="Floating label select example"
                  {...register("idEstablecimiento", {
                    required: true,
                  })}
                >
                  <option value="0">Seleccionar un local</option>
                  {establishments.map((item: any, index: number) => (
                    <option key={index} value={item.idEstablecimiento}>
                      {item.nombreEstablecimiento}
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

export default ExpensesModalComponent;
