import React, { useState } from "react";
import UrlForm from "./components/UrlForm";
import ShortUrlDisplay from "./components/ShortUrlDisplay";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";

function App() {
  const [shortUrl, setShortUrl] = useState("");
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      {!isAdmin && (
        <div className="absolute top-4 right-6">
          <button
            className="bg-blue-600 text-white font-semibold cursor-pointer px-4 py-2 rounded hover:bg-blue-700 transition-all shadow"
            onClick={() => setShowAdminLogin(true)}
          >
            Admin Login
          </button>
        </div>
      )}

      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-3xl font-bold my-6 text-blue-800">🔗 URL Shortener</h1>

        {!isAdmin && (
          <>
            <UrlForm setShortUrl={setShortUrl} />
            <ShortUrlDisplay shortUrl={shortUrl} />
          </>
        )}

        {showAdminLogin && (
          <AdminLogin
            onSuccess={() => {
              setIsAdmin(true);
              setShowAdminLogin(false);
            }}
            onCancel={() => setShowAdminLogin(false)}
          />
        )}

        {isAdmin && <AdminDashboard />}
      </div>
    </div>
  );
}

export default App;
