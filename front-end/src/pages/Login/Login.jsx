// prettier-ignore
import {  CampusBanner, InputsLogin, RemeberMe, ForgotPassword, LoginButton, } from "./components";

import "./index.css";

const Login = () => {
  return (
    <div class="bg-slate-50 flex justify-center items-center min-h-screen ">
      {/* 👇 Este es el banner del itla con la frase */}
      <CampusBanner />
      <div class="lg:p-36 md:p-52 sm:20 p-8 pt-32 w-full lg:w-1/2 h-screen  ">
        <h1 class="text-2xl font-semibold mb-4">Login</h1>
        {/* --- FORMULARIO ---  */}
        <form action="#" method="POST" className="z-40">
          {/* 👇 Estos son los inputs de usuario y contraseña */}
          <InputsLogin {...inputs} />
          {/* 👇 checkbox de recuerdame */}
          <RemeberMe />
          {/* 👇 boton de reinicio de contraseña */}
          <ForgotPassword />
          {/* 👇 boton de inicio de sesión */}
          <LoginButton />
        </form>
      </div>
    </div>
  );
};

export default Login;

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
