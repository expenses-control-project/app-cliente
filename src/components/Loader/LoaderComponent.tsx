import { Spinner } from "react-bootstrap"

function LoaderComponent() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{width: "100%", height: "100%"}}>
      <Spinner animation="border" role="status" variant="primary" className="spinner">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default LoaderComponent