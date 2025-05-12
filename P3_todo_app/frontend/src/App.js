import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer';
import TodoCard from './Components/TodoCard';

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoCard/>
      <Footer/>
    </div>
  );
}

export default App;
