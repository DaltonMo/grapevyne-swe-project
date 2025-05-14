import api from "./api";

export async function login(username, password) {
  try {
    const response = await api.post("/auth/login", {
      username,
      password,
    });
    return response.data.token;
  } catch (err) {
    throw new Error("Invalid username or password.");
  }
}

export async function register(username, password) {
  try {
    const response = await api.post("/auth/register", {
      username,
      password,
    });
    return response.data;
  } catch (err) {
    throw new Error("Registration failed");
  }
}
