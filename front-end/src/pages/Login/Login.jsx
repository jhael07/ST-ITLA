import React from "react";
import CampusBanner from "./components/CampusBanner";
import InputsLogin from "./components/InputsLogin";
import "./index.css";
import RemeberMe from "./components/RemeberMe";

const Login = () => {
  const inputs = {
    inputs: [
      {
        label: "Usuario",
        type: "text",
        name: "username",
        placeholder: "Escribe el nombre de usuario",
      },
      {
        label: "Contraseña",
        type: "password",
        name: "password",
        placeholder: "Escribe la contraseña",
      },
    ],
  };

  return (
    <div class="bg-slate-50 flex justify-center items-center min-h-screen ">
      {/* 👇 Este es el banner del itla con la frase al lado del login */}
      <CampusBanner />

      <div class="lg:p-36 md:p-52 sm:20 p-8 pt-32 w-full lg:w-1/2 h-screen  ">
        <h1 class="text-2xl font-semibold mb-4">Login</h1>
        <form action="#" method="POST" className="z-40">
          {/* 👇 Estos son los inputs de usuario y contraseña */}
          <InputsLogin {...inputs} />

          {/* 👇 boton de recuerdame */}
          <RemeberMe />

          <div class="mb-6 text-blue-500">
            <a href="#" class="hover:underline">
              ¿Olvidaste la contraseña?
            </a>
          </div>

          <button type="submit" class="login__button">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
