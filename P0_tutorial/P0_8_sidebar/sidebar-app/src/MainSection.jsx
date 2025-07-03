/*
1. Uses React state to track which object keys are expanded.
2. Each nested key is uniquely identified using a "path" string.
3. When a user clicks a toggle (▶/▼), the corresponding path is flipped between expanded and collapsed.
4. Data is rendered recursively.
5. Indentation increases with depth to visualize hierarchy.
*/

import React, { useState } from "react";
import profiles from "./data/profile_data.json";
import { ChevronsDown, ChevronsRight } from "lucide-react"

export default function MainSection() {
    // Track which keys are expanded (open)
    const [expandedKeys, setExpandedKeys] = useState({});

    // Toggle the expand/collapse state of a given key path
    function toggleKey(path) {
        if (path) {
            setExpandedKeys((prev) => ({
                ...prev,
                [path]: !prev[path], // flip true/false for the clicked key added to previous items
            }));
        }
    }

    // Recursively render nested object data
    function renderObject(obj, path = "", depth = 1) {
        return (
            <ul style={{ marginLeft: `${depth * 20}px` }}>
                {/* Object.entries(obj) returns an array of key-value pairs from an object, to wich we apply map */}
                {Object.entries(obj).map(([key, value], index) => {
                    // Unique path for each item
                    const currentPath = `${path}/${key}`;
                    // Check is an object, which help to expand or not
                    const isExpandable = typeof value === "object" && value !== null;
                    // Check if expanded
                    const isExpanded = expandedKeys[currentPath];

                    return (
                        <li key={index} className="itemMain">
                            {isExpandable ? (
                                // If value is an object, make it collapsible
                                <div className="itemChild">
                                    <span
                                        className="toggleButton"
                                        onClick={() => toggleKey(currentPath)}
                                    >
                                        {isExpanded ? <ChevronsDown /> : <ChevronsRight />} {key}
                                    </span>
                                    {/* Only show nested children if expanded */}
                                    {isExpanded && renderObject(value, currentPath, depth + 1)}
                                </div>
                            ) : (
                                // If it is not an object, display key: value
                                <div className="itemChild">
                                    <strong>{key}:</strong> {value}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    }

    let data = (
        <ul>
            {profiles.profile.children.map((item, index) => (
                <div key={index} className="profileContainer">
                    {/* Display each person */}
                    <h3 className="profile">{item.name}</h3>
                    {/* Render their detailed nested data */}
                    {renderObject(item, `person-${index}`)}
                </div>
            ))}
        </ul>
    );

    return (
        <div className="mainSection">
            <div className="sidebar">{data}</div>
            <div className="content">Content</div>
        </div>
    );
}
