import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {

    const initialValue = 60000;
    const [countDownMS, setCountDownMS] = useState(initialValue)
    const [isRunning, setIsRunning] = useState(false)
    const intervalRef = useRef(null);

    function startHandler() {
        setIsRunning(true);
    }

    function pauseHandler() {
        setIsRunning(false);
    }

    function resetHandler(){
        setIsRunning(false);
        setCountDownMS(initialValue);
    }

    function formatTime(ms) {
    let timeInSec = (ms/ 1000)
    let min = String(Math.floor(timeInSec / 60)).padStart(2, "0"); 
    let sec = String(Math.floor(timeInSec % 60)).padStart(2, "0");
    return `${min}:${sec}`
}

    useEffect( () => {

        if(isRunning && countDownMS > 0) {
            intervalRef.current = setInterval( () => {
                setCountDownMS(prevCountDownMS => prevCountDownMS - 1000 )
            }, 1000)
        } else if (countDownMS <= 0) {
            clearInterval(intervalRef.current); 
            setIsRunning(false);    
            setCountDownMS(0);
            console.log("Countdown finished!");
        }
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [isRunning, countDownMS])

    return(
        <div className="timer_container">
            <div className="timer">{formatTime(countDownMS)}</div>
            <div className="btn_container">
                <button className="btn start" onClick={startHandler} disabled={isRunning}>Start</button>
                <button className="btn stop" onClick={pauseHandler} disabled={!isRunning}>Pause</button>
                <button className="btn reset" onClick={resetHandler} disabled={!isRunning}>Reset</button>
            </div>

        </div>
    )
}

export default Timer;