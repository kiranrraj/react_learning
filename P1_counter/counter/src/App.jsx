import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const minus = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  function add() {
    if (count >= 0 && count <=9) {
      setCount(count + 1)
    }
  }

  return (
    <>
      <h1>App Counter</h1>
      <div className="btn-container">
        <p>{count}</p>
        <div className="btn-section">
          <button 
            className="btn1 btn" 
            onClick={minus} 
            disabled={count === 0}
            aria-label="Decrease the counter"
          >Minus</button>
          <button 
            className="btn2 btn" 
            onClick={add} 
            disabled={count === 10} 
            aria-label="Increase the counter"
          >Add</button>
          <button 
            className="btn3 btn" 
            onClick={() => setCount(0)}
            disabled={count === 0}
          >Clear</button>
        </div>
      </div>
    </>
    
  )
}

export default App
