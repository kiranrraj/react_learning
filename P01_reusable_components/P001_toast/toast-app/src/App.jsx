import React from "react";
import { useToast } from "./ToastContext";

export default function App() {
  const { showToast } = useToast();

  return (
    <div style={{ padding: "40px", display: "flex", gap: "10px" }}>
      <button onClick={() => showToast("This is an info toast!", "info")}>
        Show Info
      </button>
      <button onClick={() => showToast("Success! Everything worked.", "success")}>
        Show Success
      </button>
      <button onClick={() => showToast("Oops! Something went wrong.", "error")}>
        Show Error
      </button>
    </div>
  );
}
