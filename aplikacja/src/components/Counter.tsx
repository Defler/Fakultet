import React from 'react';

interface CounterProps {
    initialNumber?: number;
    onNumberChange?: (someNumber: number) => void;
}

const Counter: React.FC<CounterProps> = ({ initialNumber, onNumberChange }) => {
    const [counterNumber, setCounterNumber] = React.useState(initialNumber || 0);

    const addNumber = () => {
        const number = counterNumber + 1;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }

    const decreaseNumber = () => {
        const number = counterNumber - 1;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }

    const reset = () => {
        setCounterNumber(0);
        onNumberChange && onNumberChange(0);
    }

    return (
        <div>
            <button onClick={addNumber}> + </button>
            {"\n"}{counterNumber} {"\n"}
            <button onClick={decreaseNumber}> - </button><br></br>
            <button onClick={reset}> reset </button>
        </div>

    );
}
export default Counter;