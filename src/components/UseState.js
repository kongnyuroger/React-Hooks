import React from 'react';
import { useState } from 'react';

const UseState = () => {
    const [count, setCount] = useState(0);
    function increment(){
        setCount(prevCount => prevCount + 1)
    }
    function decrement(){
        setCount(count - 1)
    }
    return (
        <div>
            <button onClick={increment}>ADD</button>
            <span>{count}</span>
            <button onClick={decrement}>SUBSTRACT</button>
        </div>
    );
};

export default UseState;