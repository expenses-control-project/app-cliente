import { useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { BoxArrowRight, GearWideConnected, Person } from "react-bootstrap-icons";
import { removeItem } from "../../../../utils/localStoreMethods";
import { useNavigate } from "react-router-dom";

function AccountPopperComponent() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  
  const handleToggle = () => setShow(!show);
  
  const logout = () => {
    removeItem('token');
    navigate('/users/login');
  }
  const Popper = (
    <Popover id="account-popper" className="mt-2">
      <Popover.Header as="h3">Cuenta</Popover.Header>
      <Popover.Body className="p-0">
        <ul className="list-unstyled d-flex flex-column mb-0" style={{width: "12rem"}}>
          <li className="link-hover d-flex gap-2 p-2" >
            <Person size={20}/>
            <a href="/profile" className="nav-link " style={{width: "100%"}}>Perfil</a>
          </li>
          <li className="link-hover d-flex gap-2 p-2">
            <GearWideConnected size={20} />
            <a href="/settings" className="nav-link" style={{width: "100%"}}>Ajustes</a>
          </li>
          <li className="link-hover border-top d-flex py-2 px-2 gap-2 text-danger">
            <BoxArrowRight size={20} />
            <button onClick={logout} className="nav-link " style={{width: "100%"}}>Cerrar Sesión</button>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );
  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={Popper}
      show={show}
      onToggle={handleToggle}
    >
      <img
        src="https://picsum.photos/id/238/200/300"
        className="bg-primary rounded-circle "
        onClick={handleToggle}
        width={40}
        height={40}
        style={{ objectFit: "cover", cursor: "pointer" }}
      />
    </OverlayTrigger>
  );
}

export default AccountPopperComponent;
