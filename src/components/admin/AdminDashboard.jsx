import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUrls() {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/admin/all`);
      setData(res.data);
    }
    fetchUrls();
  }, []);

  return (
    <div className="p-6 w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Admin Dashboard</h2>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gradient-to-r from-blue-200 to-blue-400 text-white">
              <th className="px-6 py-3 text-left text-sm font-semibold">Short Code</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Original URL</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Clicks count</th>
            </tr>
          </thead>
          <tbody>
            {data.map((url, index) => (
              <tr
                key={url.id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-3">{url.id}</td>
                <td className="px-6 py-3 truncate max-w-xs">
                  <a
                    href={url.redirectURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {url.redirectURL}
                  </a>
                </td>
                <td className="px-6 py-3">{url.totalClicks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
