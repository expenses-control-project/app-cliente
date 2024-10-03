import { useEffect, useState } from "react";
import { FloatingLabel, Modal, Form, Button } from "react-bootstrap";
import useFetchAndLoad from "../../../../hooks/useFetchAndLoad";
import { getRubrosRequest } from "../../../../services/rubros.service";
import LoaderComponent from "../../../../components/Loader/LoaderComponent";
import { useForm } from "react-hook-form";
import { patchEstablishmentRequest, postEstablishmentRequest } from "../../../../services/establishments.service";

interface EstablishmentsModalProps {
  title: string;
  show: boolean;
  row: any;
  handleClose: () => void;
  handleGetEstablishments: () => void;
}

function EstablishmentsModalComponent({
  title,
  show,
  row,
  handleClose,
  handleGetEstablishments
}: EstablishmentsModalProps) {
  const [rubros, setRubros] = useState([]);

  const { loading, callEndpoint } = useFetchAndLoad();
  const { register, handleSubmit, setValue } = useForm();

  const getRubros = async () => {
    const res = await callEndpoint(getRubrosRequest());
    setRubros(res?.data.rubros);
  };
  
  useEffect(() => {    
    getRubros();
  }, []);
  
  useEffect(() => {
    if (row != null) {
      setValue('nombreEstablecimiento', row.nombreEstablecimiento)
      setValue('rubroId', row.idRubro)
    } else {
      setValue('nombreEstablecimiento', "")
      setValue('rubroId', "0")
    }
  }, [row]);

  const onSubmit = handleSubmit(async (data: any) => {
    try {
      data.rubroId = parseInt(data.rubroId);
      
      if (row != null) {
        data.idEstablecimiento = row.idEstablecimiento;
        await callEndpoint(patchEstablishmentRequest(data));
      } else {
        await callEndpoint(postEstablishmentRequest(data));
      }
      handleGetEstablishments();
      setValue('nombreEstablecimiento', "")
      setValue('rubroId', "");
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
      {loading ? (
        <LoaderComponent />
      ) : (
        <div>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nombre"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="example"
                    {...register("nombreEstablecimiento")}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <FloatingLabel controlId="floatingSelect" label="Rubros">
                  <Form.Select
                    aria-label="Floating label select example"
                    {...register("rubroId")}
                  >
                    <option selected={true}>Seleccionar un rubro</option>
                    {rubros.map((m: any, index) => (
                      <option value={m.idRubro} key={index}>{m.nombreRubro}</option>
                    ))}
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button variant="primary" type="submit" onClick={handleClose}>
                  Guardar
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </div>
      )}
    </Modal>
  );
}
export default EstablishmentsModalComponent;
