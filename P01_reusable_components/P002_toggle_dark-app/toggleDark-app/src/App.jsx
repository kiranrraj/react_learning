// src/App.jsx
import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import ThemeToggler from './ThemeToggler';

function App() {
  // const [count, setCount] = useState(0); // This line is unused and can be removed

  return (
    <div className="appcontainer">
      <Header />
      <MainContent>
        <h1>Welcome to Your Website!</h1>
        <p>This is the main content area.</p>
        <ThemeToggler />
        <p>More content for your page...</p>
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;