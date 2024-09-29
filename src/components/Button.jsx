import React from "react";

export default function Button({ label }) {
  return (
    <button type="submit" className="primary-button">
      {label}
    </button>
  );
}
