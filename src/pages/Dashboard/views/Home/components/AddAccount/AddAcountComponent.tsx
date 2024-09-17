import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";

import "./AddAccountComponent.css";

interface AddAccountProp {
    handleOpen: (title: string) => void;
}

function AddAcountComponent({handleOpen}: AddAccountProp) {
    
  return (
    <>
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip id="add-account">Agregar cuenta</Tooltip>}
      >
        <button
          className=" btn-add-account btn btn-success rounded-circle  "
          style={{
            width: "3.5rem",
            height: "3.5rem",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
          onClick={() => {
            handleOpen("Agregar cuenta")
          }}
        >
          <Plus size={30} />
        </button>
      </OverlayTrigger>
    </>
  );
}

export default AddAcountComponent;
