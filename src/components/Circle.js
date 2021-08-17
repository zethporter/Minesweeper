import React from "react";
import { GiUnlitBomb } from "react-icons/gi";

export default function Circle() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: "rgba(0,0,0,0.4)",
          alignItems: "center",
          paddingTop: "7px",
        }}
        
      >
        <GiUnlitBomb />
      </div>
    </div>
  );
}

// GiUnlitBomb