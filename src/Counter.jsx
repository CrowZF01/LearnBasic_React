import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(c => c = 0);
    }

    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>reset</button>
            <button className="counter-button" onClick={increment}>increment</button>
        </div>
    )

}

export default Counter