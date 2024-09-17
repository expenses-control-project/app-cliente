import { Button, FloatingLabel, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";

interface AccountModalProps {
  title: string;
  show: boolean;
  handleClose: () => void;
}

function AccountModalComponent({
  title,
  show,
  handleClose,
}: AccountModalProps) {
  return (
    <Modal show={show} onHide={handleClose} className="fade " fullscreen={"sm-down"}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <FloatingLabel
              controlId="floatingInput"
              label="Nombre"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="example" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <FloatingLabel
              controlId="floatingInput"
              label="Saldo"
              className="mb-3"
            >
              <Form.Control type="number" placeholder="123456" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <FloatingLabel controlId="floatingSelect" label="Tipo de cuenta">
                <Form.Select aria-label="Floating label select example">
                    <option>Seleccionar un tipo</option>
                    <option value="1">En efectivo</option>
                    <option value="2">Bancaria</option>
                    <option value="3">Billetera virtual</option>
                </Form.Select>
                </FloatingLabel>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AccountModalComponent;
