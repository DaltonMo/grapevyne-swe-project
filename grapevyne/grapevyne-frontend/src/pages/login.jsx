import { useState } from "react";
import { login } from "../services/auth"

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const token = await login(username, password);
      localStorage.setItem("token", token);
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-3 border rounded"
          />
          <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-3 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
      </form>
    </div>
  );
}