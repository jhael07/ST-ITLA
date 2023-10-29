// prettier-ignore
import {  CampusBanner, InputsLogin, RemeberMe, ForgotPassword, LoginButton, } from "./components";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import "./index.css";
import { useEffect, useState } from "react";
import { login } from "../../api/methods";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const inputs = {
    inputs: [
      {
        label: "Email",
        type: "text",
        name: "email",
        placeholder: "Escribe el Email",
        register,
        rules: {
          required: {
            value: true,
            message: "El email es obligatorio",
          },
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "El email es invalido.",
          },
        },
      },
      {
        label: "Contraseña",
        type: "password",
        name: "password",
        register,
        placeholder: "Escribe la contraseña",
        rules: {
          required: {
            value: true,
            message: "La contraseña es obligatoria",
          },
        },
      },
    ],
  };

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (errorMessage)
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
  }, [errorMessage?.length > 0]);

  return (
    <div class="bg-slate-50 flex justify-center items-center min-h-screen ">
      {/* 👇 Este es el banner del itla con la frase */}
      <CampusBanner />
      <div class="lg:p-36 md:p-52 sm:20 p-8 pt-32 w-full lg:w-1/2 h-screen  ">
        <div
          className={`absolute z-40 top-10 right-12 w-fit transition-all ${
            errorMessage
              ? "translate-x-[-10px] opacity-1"
              : " opacity-0 translate-x-6"
          }`}
        >
          <div
            class="bg-red-100 border border-red-400 mx-auto w-fit min-w-[21.5rem] flex items-center gap-3 text-red-600 px-4 py-3 rounded relative border-l-8 border-l-red-500"
            role="alert"
          >
            <span class="block sm:inline font-medium ">{errorMessage}</span>
            <AiOutlineClose
              className="hover:cursor-pointer absolute right-3"
              onClick={() => setErrorMessage(null)}
            />
          </div>
        </div>
        <h1 class="text-2xl font-semibold mb-4">Login</h1>
        {/* --- FORMULARIO ---  */}
        <form
          onSubmit={handleSubmit(
            ({ email, password }) => {
              login({ email, password });
            },
            (err) => {
              const message = err[Object.keys(err)[0]]?.message;
              setErrorMessage(message);
            }
          )}
        >
          {/* 👇 Estos son los inputs de usuario y contraseña */}
          <InputsLogin {...inputs} />
          <RemeberMe />
          <ForgotPassword />
          <LoginButton />
        </form>
      </div>
    </div>
  );
};

export default Login;
