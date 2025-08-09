import React from "react";

function CopyButton({ textToCopy }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert("Copied to clipboard!"))
      .catch(() => alert("Failed to copy"));
  };

  return (
    <button
      onClick={copyToClipboard}
      className="px-5 py-2 ml-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300
        cursor-pointer">
      Copy
    </button>
  );
}

export default function ShortUrlDisplay({ shortUrl }) {
  if (!shortUrl) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h1 className="text-xl font-bold">Shortened URL:</h1>
      <a href={shortUrl} target="_blank" rel="noopener noreferrer">
        {shortUrl}
      </a>
      <CopyButton textToCopy={shortUrl} />
    </div>
  );
}
