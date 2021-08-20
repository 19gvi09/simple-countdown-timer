import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer({time}) {
    // Set time
    const {dd = 0, hh = 0, mm = 0, ss = 0} = time;
    const [[days, hours, minutes, seconds], setTime] = useState([dd, hh, mm, ss]);

    // Countdown function
    function countdown() {
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
            return;
        }
        else if (hours === 0 && minutes === 0 && seconds === 0) {
            setTime([days - 1, 23, 59, 59]);
        }
        else if (minutes === 0 && seconds === 0) {
            setTime([days, hours - 1, 59, 59]);
        }
        else if (seconds === 0) {
            setTime([days, hours, minutes - 1, 59]);
        }
        else {
            setTime([days, hours, minutes, seconds - 1]);
        }
    };

    // Start timer
    useEffect(() => {
        setTimeout(countdown, 1000);
    });

    return (
        <div className="timer">
            <div className="timer__card">
                <div className="timer__nums"><span className="timer__num">{days.toString().padStart(2, '0')}</span></div>
                <h2 className="timer__text">DAYS</h2>
            </div>
            <div className="timer__card">
                <div className="timer__nums"><span className="timer__num">{hours.toString().padStart(2, '0')}</span></div>
                <h2 className="timer__text">HOURS</h2>
            </div>
            <div className="timer__card">
                <div className="timer__nums"><span className="timer__num">{minutes.toString().padStart(2, '0')}</span></div>
                <h2 className="timer__text">MINUTES</h2>
            </div>
            <div className="timer__card">
                <div className="timer__nums"><span className="timer__num">{seconds.toString().padStart(2, '0')}</span></div>
                <h2 className="timer__text">SECONDS</h2>
            </div>
      </div>
    );
}

export default Timer;