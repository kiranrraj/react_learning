import { useState, useEffect } from "react"

function App() {

  const [timer, setTimer] = useState(new Date())
  const [is24Hour, set24Hour] = useState(false)
  const [timeZone, setTimeZone] = useState("IST")

  const handleTimeZoneChange = (e) => {setTimeZone(e.target.value) }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer(new Date())
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <div className="timer-container">
      <h1 className="header">Timer App</h1>
      <h2 className="timer">{new Intl.DateTimeFormat('en-US', {
        timeZone,
        hour12: !is24Hour,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).format(timer)}</h2>
      <label>
        <input 
          type="checkbox" 
          id="toggleFormat" 
          onChange={() => set24Hour(!is24Hour)}
          aria-label="Toggle between 12-hour and 24-hour time format"
        />
        24-Hour Format
      </label>
      <div className="timezone_select">
        <label>Time Zone </label>
        <select 
          onChange={handleTimeZoneChange} 
          aria-label="Select time zone"
          value={timeZone}>
          <option value="Asia/Kolkata">IST (Indian Standard Time)</option>
          <option value="UTC">UTC (Coordinated Universal Time)</option>
          <option value="America/Denver">MST (Mountain Standard Time)</option>
          <option value="America/New_York">EST (Eastern Standard Time)</option>
        </select>
      </div>
    </div>
  )
}

export default App
