import React, { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import ToastContext from "./ToastContext";

// Global counter for unique toast IDs
let idCounter = 0;

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((message, type = "info", duration = 3000) => {
    const id = idCounter++;
    const toast = { id, message, type };
    setToasts((prev) => [...prev, toast]);

    setTimeout(() => removeToast(id), duration);
  }, [removeToast]); // keeps the showToast function stable unless removeToast changes

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {createPortal(
        <div className="toast-container">
          {toasts.map(({ id, message, type }) => (
            <div key={id} className={`toast toast-${type}`}>{message}</div>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}
