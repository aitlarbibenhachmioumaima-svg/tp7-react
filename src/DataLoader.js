// src/DataLoader.js
import React from "react";

// DataLoader stylé avec de nouveaux noms
function DataLoader({ render }) {
  const people = ["Oumaima", "Adam", "Amin"];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#dff9fb",
        borderRadius: "10px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
        fontFamily: "'Arial', sans-serif",
        marginBottom: "1rem",
      }}
    >
      {render(people)}
    </div>
  );
}

export default DataLoader;