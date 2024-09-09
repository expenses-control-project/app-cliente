import { useState } from "react";
import {
  ArrowRight,
  EnvelopeFill,
  EyeFill,
  EyeSlashFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function LoginView() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <section className="text-center px-4">
      <h1 className="fs-1">Iniciar Sesión</h1>
      <p>Por favor ingrese sus credenciales para acceder al sistema</p>
      <form action="">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            style={{
              borderTopRightRadius: "1.4rem",
              borderTopLeftRadius: "1.4rem",
            }}
          />
          <label form="floatingInput">Correo Electronico</label>
          <EnvelopeFill
            size={30}
            className="position-absolute top-50 end-0 translate-middle-y me-3"
          />
        </div>
        <div className="form-floating mb-3 position-relative">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="floatingInput"
            placeholder="123456"
          />
          <label form="floatingInput">Contraseña</label>
          {showPassword ? (
            <EyeSlashFill
              onClick={handleTogglePassword}
              size={30}
              className="position-absolute top-50 end-0 translate-middle-y me-3 "
              style={{ cursor: "pointer" }}
            />
          ) : (
            <EyeFill
              onClick={handleTogglePassword}
              size={30}
              className="position-absolute top-50 end-0 translate-middle-y me-3 "
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary btn-md btn-lg"
            style={{
              borderBottomRightRadius: "1.4rem",
              borderBottomLeftRadius: "1.4rem",
              borderTopRightRadius: "0.4rem",
              borderTopLeftRadius: "0.4rem",
            }}
            type="submit"
          >
            ACCEDER
          </button>
        </div>
        <p className="text-start pt-2">
          ¿ Todavía no tienes cuenta ?{" "}
          <Link to="/users/register" style={{ cursor: "pointer" }}>
            Registrate <ArrowRight size={20} />
          </Link>
        </p>
      </form>
    </section>
  );
}

export default LoginView;
