import { Toast, ToastContainer } from "react-bootstrap";
import { ToastPosition } from "react-bootstrap/esm/ToastContainer";

interface ToastProp {
  position: ToastPosition | undefined;
  bg: string;
  text: string;
  show: boolean;
  handleCloseToast: () => void;
}

function ToastComponent({position, bg, text, show, handleCloseToast }: ToastProp) {
  return (
    <ToastContainer position={position} className="mt-2">
      <Toast bg={bg} onClose={handleCloseToast} show={show} delay={5000}  autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Expesnes Control</strong>
        </Toast.Header>
        <Toast.Body>{text}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastComponent;
