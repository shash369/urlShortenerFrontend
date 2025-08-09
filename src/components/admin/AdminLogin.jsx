import React, { useState } from "react";
import axios from "axios";

export default function AdminLogin({ onSuccess, onCancel }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/login`,
        { email, password }
      );

      if (res.data.success) {
        onSuccess();
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md animate-fade-in">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="text-gray-600 hover:text-red-500 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
