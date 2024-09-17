import { useLocation } from "react-router-dom";
import AccountPopperComponent from "../AccountPopper/AccountPopperComponent";

function TopNavbarComponent() {
  const location = useLocation();
  const lastSegment = location.pathname.split('/').filter(Boolean).pop();
  return (
    <div className="bg-body-secondary px-3 py-2 d-flex flex-row align-items-center justify-content-between border-bottom"
    style={{position: "sticky", top: "0", zIndex: "10"}}>
      <h1 className="fs-4 mb-0 text-capitalize">{lastSegment}</h1>
      <div className="d-flex flex-row align-items-center gap-2">
        <p className="m-0 d-none d-sm-block">Hola 👋 <strong>Uciel Daró</strong></p>
        <AccountPopperComponent />
      </div>
    </div>
  );
}

export default TopNavbarComponent;
