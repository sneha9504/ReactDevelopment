import React, { useState } from 'react';

function Timer() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const click = () => {
        if (!isRunning) {
            setIsRunning(false);
            setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        }
    };

    return (
        <>
            {count} <button onClick={click}>Start Timer</button>
        </>
    );
}

export default Timer;
