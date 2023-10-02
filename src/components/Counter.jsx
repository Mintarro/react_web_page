import React, {useState} from 'react';
import { Button } from "react-bootstrap";

const Counter = () => {
    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <Button variant="primary" onClick={increment}> Login </Button>
            <Button variant="primary" onClick={decrement}> Register </Button>
        </div>
    );
};

export default Counter;