import React from "react";

export default function Toast({ message, onClose }) {
    return (
        <div className="toast">
            <span>Message</span>
            <button onClick={onClose}>X</button>
        </div>
    )
}