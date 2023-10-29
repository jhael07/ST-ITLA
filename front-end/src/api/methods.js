const BASE_URL = import.meta.env.VITE_API_URL;

export const login = async ({ email, password }) => {
  const data = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    body: {
      email,
      password,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(data);
};
