import { useState } from "react";
import {
  ArrowRight,
  EnvelopeFill,
  EyeFill,
  EyeSlashFill,
  PersonFill,
} from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import {
  ApellidoInput,
  NombreInput,
} from "../styled-components/auth.styled.component";
import { registerUser } from "../../../services/auth.service";

function RegisterView() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const { callEndpoint } = useFetchAndLoad();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const password = watch("password");

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleRepeatPassword = () => {
    setShowRepeatPassword((prev) => !prev);
  };

  const onSubmit = handleSubmit(async (data: any) => {
    try {
      delete data.repeatPassword;
      data.edad = parseInt(data.edad);
      const res = await callEndpoint(registerUser(data));
      if (res?.data.statusCode == 201) {
        navigate("/dashboard/inicio");
      }
    } catch (error) {
      
    }
  });

  return (
    <section className="text-center px-4">
      <h1 className="fs-1">Crea una cuenta</h1>
      <p>Por favor ingrese los siguientes datos para crear un usuario</p>
      <form onSubmit={onSubmit}>
        {/** Nombre y Apellido */}
        <div className="d-flex gap-sm-3 flex-column flex-sm-row">
          <div className="d-flex flex-column align-items-start mb-3">
            <div className="form-floating" style={{ width: "100%" }}>
              <NombreInput
                type="text"
                className="form-control "
                id="floatingInputName"
                placeholder="example"
                {...register("nombre", { required: true })}
                aria-invalid={errors.nombre ? "true" : "false"}
              />
              <label form="floatingInputName">Nombre</label>
              <PersonFill
                size={30}
                className="position-absolute top-50 end-0 translate-middle-y me-3"
              />
            </div>
            {errors.nombre?.type === "required" && (
              <p role="alert" className="text-danger mb-0">
                Se necesita un nombre
              </p>
            )}
          </div>
          <div className="d-flex flex-column align-items-start mb-3">
            <div className="form-floating" style={{ width: "100%" }}>
              <ApellidoInput
                type="text"
                className="form-control"
                id="floatingInputLastName"
                placeholder="example"
                {...register("apellido", { required: true })}
              />
              <label form="floatingInputLastName">Apellido</label>
              <PersonFill
                size={30}
                className="position-absolute top-50 end-0 translate-middle-y me-3"
              />
            </div>
            {errors.apellido?.type === "required" && (
              <p role="alert" className="text-danger mb-0">
                Se necesita un apellido
              </p>
            )}
          </div>
        </div>
        {/** Usuario y Edad */}
        <div className="d-flex gap-sm-3 flex-column flex-sm-row">
          <div className="d-flex flex-column align-items-start mb-3">
            <div className="form-floating" style={{ width: "100%" }}>
              <input
                type="text"
                className="form-control"
                id="floatingInputUserName"
                placeholder="example"
                {...register("usuario", { required: true })}
              />
              <label form="floatingInputUserName">Nombre de Usuario</label>
              <PersonFill
                size={30}
                className="position-absolute top-50 end-0 translate-middle-y me-3"
              />
            </div>
            {errors.usuario?.type === "required" && (
              <p role="alert" className="text-danger mb-0">
                Se necesita un nombre de usuario
              </p>
            )}
          </div>
          <div className="d-flex flex-column align-items-start mb-3">
            <div className="form-floating" style={{ width: "100%" }}>
              <input
                type="number"
                className="form-control"
                id="floatingInputAge"
                placeholder="12345"
                {...register("edad", {
                  required: true,
                })}
              />
              <label form="floatingInputAge">Edad</label>
              <PersonFill
                size={30}
                className="position-absolute top-50 end-0 translate-middle-y me-3"
              />
            </div>
            {errors.edad?.type === "required" && (
              <p role="alert" className="text-danger mb-0">
                Se necesita una edad
              </p>
            )}
          </div>
        </div>
        {/** Email */}
        <div className="d-flex flex-column align-items-start mb-3">
          <div className="form-floating" style={{ width: "100%" }}>
            <input
              type="email"
              className="form-control"
              id="floatingInputEmail"
              placeholder="example@gmail.com"
              {...register("email", {
                required: "Se necesita un email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "El formato del email no es válido",
                },
              })}
            />
            <label form="floatingInputEmail">Correo Electronico</label>
            <EnvelopeFill
              size={30}
              className="position-absolute top-50 end-0 translate-middle-y me-3"
            />
          </div>
          {errors.email?.type === "required" && (
            <p role="alert" className="text-danger mb-0">
              {errors.email?.message?.toString()}
            </p>
          )}
        </div>
        {/** Contraseña */}
        <div className="d-flex flex-column align-items-start ">
          <div
            className="form-floating position-relative"
            style={{ width: "100%" }}
          >
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="floatingInputPassword"
              placeholder="123456"
              {...register("password", {
                required: "Se necesita una contraseña",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres",
                },
                validate: {
                  hasLowercase: (value) =>
                    /[a-z]/.test(value) ||
                    "Debe contener una letra en minuscula",
                  hasUppercase: (value) =>
                    /[A-Z]/.test(value) ||
                    "Debe contener una letra en mayuscula",
                  hasNumber: (value) =>
                    /\d/.test(value) || "Debe incluir un número",
                },
              })}
            />
            <label form="floatingInputPassword">Contraseña</label>
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
          {/** Visualización de errores */}
          <p className="text-secondary fs-6" style={{ textAlign: "start", maxWidth: "35rem" }}>
            La contraseña debe tener al menos 8 caracteres, incluyendo una letra
            mayúscula, una letra minúscula y un número{" "}
          </p>
          {errors.password && (
            <p role="alert" className="text-danger mb-0">
              {errors.password?.message?.toString()}
            </p>
          )}
        </div>
        {/** Repetir contraseña */}
        <div className="d-flex flex-column align-items-start">
          <div
            className="form-floating mb-3 position-relative"
            style={{ width: "100%" }}
          >
            <input
              type={showRepeatPassword ? "text" : "password"}
              className="form-control"
              id="floatingInputRepeatPassword"
              placeholder="123456"
              {...register("repeatPassword", {
                required: "Por favor, confirme la contraseña",
                validate: (value) => value === password || "La constraseña no es igual"
              })}
            />
            <label form="floatingInputRepeatPassword">Repetir Contraseña</label>
            {showRepeatPassword ? (
              <EyeSlashFill
                onClick={handleToggleRepeatPassword}
                size={30}
                className="position-absolute top-50 end-0 translate-middle-y me-3 "
                style={{ cursor: "pointer" }}
              />
            ) : (
              <EyeFill
                onClick={handleToggleRepeatPassword}
                size={30}
                className="position-absolute top-50 end-0 translate-middle-y me-3 "
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          {errors.repeatPassword && <p role="alert" className="text-danger mb-0">{errors.repeatPassword.message?.toString()}</p>}
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
            REGISTRARSE
          </button>
        </div>
        <p className="text-start pt-2">
          ¿Ya tienes cuenta?{" "}
          <Link to="/users/login" style={{ cursor: "pointer" }}>
            Inicia sesión <ArrowRight size={20} />
          </Link>
        </p>
      </form>
    </section>
  );
}

export default RegisterView;
