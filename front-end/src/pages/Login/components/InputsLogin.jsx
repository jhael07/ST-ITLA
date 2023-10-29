import Input from "../../../components/Forms/Input";

const InputsLogin = ({ inputs }) => {
  return (
    <>
      {inputs.map(({ label, type, name, placeholder }) => {
        return (
          <div class="mb-4">
            <Input
              label={label}
              type={type}
              name={name}
              placeholder={placeholder}
            />
          </div>
        );
      })}
    </>
  );
};

export default InputsLogin;
