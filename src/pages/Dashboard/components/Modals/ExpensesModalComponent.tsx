import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

interface ExpensesModalProps {
  title: string;
  show: boolean;
  handleClose: () => void;
}

function ExpensesModalComponent({
  title,
  show,
  handleClose,
}: ExpensesModalProps) {
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
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <FloatingLabel
              controlId="floatingInput"
              label="Monto"
              className="mb-3"
            >
              <Form.Control type="number" placeholder="1000" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción del gasto</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <FloatingLabel controlId="floatingSelect" label="Cuentas">
              <Form.Select aria-label="Floating label select example">
                <option>Seleccionar una cuenta</option>
                <option value="1">Efectivo</option>
                <option value="2">Banco Macro</option>
                <option value="3">Mercado Pago</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <FloatingLabel controlId="floatingSelect" label="Locales">
              <Form.Select aria-label="Floating label select example">
                <option>Seleccionar un local</option>
                <option value="1">Porto GYM</option>
                <option value="2">SUBE</option>
                <option value="3">Carrefour</option>
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

export default ExpensesModalComponent;
