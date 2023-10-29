import React from "react";

const RemeberMe = () => {
  return (
    <div class="mb-4 flex items-center">
      <input
        type="checkbox"
        id="remember"
        name="remember"
        class="text-blue-500"
      />
      <label for="remember" class="text-gray-600 ml-2">
        Recuerdame
      </label>
    </div>
  );
};

export default RemeberMe;
