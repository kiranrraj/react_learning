// MainContent.jsx
import React from 'react';

const MainContent = ({ children }) => {
    return (
        <main className="main-content">
            {children} {/* Renders whatever is passed between <MainContent> tags */}
        </main>
    );
};

export default MainContent;