import { useState } from "react";
import {
  ArrowRight,
  EyeFill,
  EyeSlashFill,
} from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { login } from "../../../services/auth.service";
import { setItem } from "../../../utils/localStoreMethods";

function LoginView() {
  const [showPassword, setShowPassword] = useState(false);
  const { callEndpoint } = useFetchAndLoad();

  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data: any) => {
    try {
      const res = await callEndpoint(login(data))
      
      setItem("token",res?.data.accesToken);
      if (res?.request.status == 201) {
        navigate('/dashboard/inicio')
      }

    } catch (error) {
      console.error(error);
    }
  });

  return (
    <section className="text-center px-4" style={{height: "100%"}}>
      <h1 className="fs-1">Iniciar Sesión</h1>
      <p>Por favor ingrese sus credenciales para acceder al sistema</p>
      <form onSubmit={onSubmit}>
        <div className="d-flex flex-column align-items-start mb-3">
          <div className="form-floating" style={{ width: "100%" }}>
            <input
              type="text"
              className="form-control"
              id="floatingInputEmailOrUserName"
              placeholder="example"
              {...register("usuario", {
                required: "Se necesita un nombre de usuario o email",
              })}
              style={{

                borderTopRightRadius: "1.4rem",
                borderTopLeftRadius: "1.4rem",
              }}
            />
            <label form="floatingInputEmailOrUserName">Nombre de usuario o Email</label>
          </div>
          {errors.usuario && (
            <p role="alert" className="text-danger mb-0">
              {errors.usuario?.message?.toString()}
            </p>
          )}
        </div>
        <div className="d-flex flex-column align-items-start mb-3">
          <div className="form-floating position-relative" style={{width: "100%"}}>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="floatingInput"
              placeholder="123456"
              {...register("password", {
                required: "Se necesita una contraseña",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres",
                },
              })}
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
          {errors.password && (
            <p role="alert" className="text-danger mb-0">
              {errors.password?.message?.toString()}
            </p>
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
          ¿Todavía no tienes cuenta?{" "}
          <Link to="/users/register" style={{ cursor: "pointer" }}>
            Registrate <ArrowRight size={20} />
          </Link>
        </p>
      </form>
    </section>
  );
}

export default LoginView;
