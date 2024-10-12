import { CountdownCircleTimer } from "react-countdown-circle-timer";
import React, { useState, useEffect } from "react";

export function Breathe() {

    const [counter, setCounter] = useState(4);
    const [isActive, setIsActive] = useState(false);
    const [go, setGo] = useState(0);
    const [breathe, setBreathe] = useState("Breathe in");

  const [key, setKey] = useState(0); // To re-render the timer

  const restart = () => {

        if (go == 0) {
            setCounter(7)
        }
        else if (go == 1) {
            setCounter(8)
        }
        //setCounter(8);
        setIsActive(true);
        setGo(go + 1);
        // Increment the key to re-render the timer
        setKey((prevKey) => prevKey + 1);



  };

  const clear = () => {
    setCounter(0);
    setIsActive(false);
    // Increment the key to re-render the timer
    setKey((prevKey) => prevKey + 1);
  };

    const handleComplete = () => {


            if (go === 2) {
                setIsActive(false);
                setGo(0);
                setKey(0)
                setCounter(4)
            }
             else {
                /*
                setTimeout(() => {

                  }, 4000) */

                restart();
            }
            return [false, 0]; // Return false to stop the timer



    };

    const renderTime = ({ remainingTime }) => {
        return (
            <div className="timer">
                <div className="text">Time</div>
                <div className="value">{remainingTime}</div>
                <div className="text">seconds</div>
            </div>
        );
    };


    const start = () => {
        setIsActive(true)

    }



  useEffect(() => {
    let timer;
    if (isActive && counter > 0) {
      timer = setInterval(
        () => setCounter((prevCounter) => prevCounter - 1),
        8000
      );
    } else if (!isActive && counter !== 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [counter, isActive]);





  return (
    <div className="App">
      <div>
        <h1>Routine Starts in...</h1>
        <h3>Progressbar Timer</h3>
      </div>
      <div key={key} id="pomodoro-timer" className="Progressbar">
        <CountdownCircleTimer
          onComplete={handleComplete}
          isPlaying={isActive}
          duration={counter}
          colors={"#EE7B30"}
        >
          {renderTime}

        </CountdownCircleTimer>
        {isActive &&
            breathe
        }

      </div>
      <div>

        <button onClick={clear}>CLEAR</button>
        <button onClick={start}>Press to start</button>
      </div>
    </div>
  );


}
