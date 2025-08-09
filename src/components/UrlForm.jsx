import React, { useState } from "react";
import axios from "axios";

export default function UrlForm({ setShortUrl }) {
  const [longUrl, setLongUrl] = useState("");
  const backEnd = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!longUrl.trim()) return;

    try {
      const response = await axios.post(`${backEnd}/api/shorten`, {
        url: longUrl,
      });

      setShortUrl(`${backEnd}/${response.data.id}`);
    } catch (err) {
      console.error("Error shortening URL", err);
      alert("Failed to shorten URL");
    }

    setLongUrl("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded-xl shadow-md"
    >
      <input
        type="url"
        placeholder="Enter a long URL..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
      />
      <button
        type="submit"
        className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300
        cursor-pointer"
      >
        Shorten
      </button>
    </form>
  );
}
