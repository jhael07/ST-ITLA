import { useForm } from "react-hook-form";
import Input from "../../../components/Forms/Input";

const InputsLogin = ({ inputs }) => {
  return (
    <>
      {/* 👇 Esto es un arreglo que lo recibe del prop (parametro) de arriba. */}
      {inputs.map((input) => {
        return (
          <div class="mb-4">
            <Input {...input} />
          </div>
        );
      })}
    </>
  );
};

export default InputsLogin;
