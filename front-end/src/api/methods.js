const BASE_URL = import.meta.env.VITE_API_URL;
import Swal from "sweetalert2";
import secureLocalStorage from "react-secure-storage";

export const post = async (url, body) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.message) {
      Swal.fire("Error", data.message, "error");
    } else {
      secureLocalStorage.setItem("token", data);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const login = async ({ email, password }) =>
  await post(`${BASE_URL}/login`, { email, password });
