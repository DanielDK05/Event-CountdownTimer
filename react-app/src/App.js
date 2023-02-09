import React, { useState } from 'react'
import './css/app.css'

export default function App() {
  const [dateValue, setDateValue] = useState("0000-00-00");
  const [dateString, setDateString] = useState("");
  const [timerID, setTimerID] = useState(null);
  const [isTiming, setIsTiming] = useState(false);

  const startTimer = () => {
    if (dateValue !== "0000-00-00") {
      if(isTiming) {
        setIsTiming(true);
        const inputDate = new Date(dateValue);

        setTimerID(setInterval(() => {
          const curDate = new Date();

          //Gets the difference in milliseconds between dates
          const timeDifference = inputDate.getTime() - curDate.getTime();

          // Converts time from ms to days, hours, minutes, etc
          // 1000ms = 1s || 60s = 1m || 60min = 1h || 24h = 1 day
          const dayDifference = timeDifference / (1000 * 3600 * 24);
          const hourDifference = (dayDifference-Math.floor(dayDifference)) * 24;
          const minDifference = (hourDifference-Math.floor(hourDifference)) * 60;
          const secDifference = (minDifference-Math.floor(minDifference)) * 60;

          if ((Math.floor(dayDifference) + Math.floor(hourDifference) + Math.floor(minDifference) + Math.floor(secDifference)) !== 0) {
            setDateString(Math.floor(dayDifference) + " days, " + Math.floor(hourDifference) + " hours, " + Math.floor(minDifference) + " minutes, and " + Math.floor(secDifference) + " seconds");
          } else {
            setDateString("Hurray!! The time is now!");
            clearInterval(timerID);
          }
        }, 1000));
      } else {
        setIsTiming(false);
        // RESET TIMER HERE!!!!!!
      }
    } else {
      setDateString("Please choose a date! >:(")
    }
  }

  const stopTimer = () => {
    setDateString("Timer is stopped.");
    setDateValue("0000-00-00");
    clearInterval(timerID);
  }

  const onInputChange = (event) => {
    setDateValue(event.target.value);
  }

  return (
    <div>
      <h1>Time to date project!</h1>
      <h3>Input the date:</h3>
      <input 
        type='date'
        value={dateValue}
        onChange={onInputChange}
      />
      <button onClick={startTimer}>
        Start timer
      </button>
      <button onClick={stopTimer}>
        Stop timer
      </button>
      <h2>{dateString}</h2>
    </div>
  );
}
