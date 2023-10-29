import React from "react";

const Input = ({ label, type, name, placeholder }) => {
  return (
    <div>
      <label for="username" class="block text-gray-600 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        class="w-full border   border-gray-300 rounded-md py-2 px-3 focus:outline-none
           focus:border-blue-500"
        autocomplete="off"
      />
    </div>
  );
};

export default Input;
