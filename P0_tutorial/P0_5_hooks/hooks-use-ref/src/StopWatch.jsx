import React, { useState, useRef, useEffect } from 'react';

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [showMilliseconds, setShowMilliseconds] = useState(true);

  const intervalRef = useRef(null);
  const lastLapTimeRef = useRef(0);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      const startTime = Date.now() - time;

      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
  };

  const pause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  const reset = () => {
    pause();
    setTime(0);
    setLaps([]);
    lastLapTimeRef.current = 0;
  };

  const lap = () => {
    const currentTime = time;
    const lapTime = currentTime - lastLapTimeRef.current;
    lastLapTimeRef.current = currentTime;
    setLaps(prev => [...prev, lapTime]);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const formatTime = (ms, withMillis = true) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000));

    if (withMillis) {
      return `${String(minutes).padStart(2, '0')}:` +
             `${String(seconds).padStart(2, '0')}:` +
             `${String(milliseconds).padStart(3, '0')}`;
    } else {
      return `${String(minutes).padStart(2, '0')}:` +
             `${String(seconds).padStart(2, '0')}`;
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Stopwatch</h2>
      <h1>{formatTime(time, showMilliseconds)}</h1>

      <button onClick={start} disabled={isRunning}>Start</button>
      <button onClick={pause} disabled={!isRunning}>Pause</button>
      <button onClick={reset}>Reset</button>
      <button onClick={lap} disabled={!isRunning}>Lap</button>
      <button onClick={() => setShowMilliseconds(p => !p)}>
        {showMilliseconds ? 'Hide' : 'Show'} Milliseconds
      </button>

      <h3>Lap Times</h3>
      <ol>
        {laps.map((lapTime, index) => (
          <li key={index}>
            Lap {index + 1} {formatTime(lapTime, showMilliseconds)}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default StopWatch;
