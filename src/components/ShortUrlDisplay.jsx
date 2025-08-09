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
      className="items-center text-center px-3 ml-2 border border-black rounded-xl bg-blue-400 text-white hover:bg-amber-400 transition-all duration-300 ease-in-out cursor-pointer"
    >
      Copy
    </button>
  );
}

export default function ShortUrlDisplay({ shortUrl }) {
  if (!shortUrl) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <p>Shortened URL:</p>
      <a href={shortUrl} target="_blank" rel="noopener noreferrer">
        {shortUrl}
      </a>
      <CopyButton textToCopy={shortUrl} />
    </div>
  );
}
