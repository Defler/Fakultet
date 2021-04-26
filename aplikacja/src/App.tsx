import React from 'react';
import './App.css';

import CustomHeader, { addNumber } from './components/CustomHeader';
import Counter from './components/Counter';


const App = () => {
    const addedNumber = addNumber(1, 2);
    const [changedNumber, setChangedNumber] = React.useState(0);

    const handleNumberChange = (newNumber: number) => {
        setChangedNumber(newNumber);
    }

    const liczbaMniejszaOdZera = (liczba: number) => {
        if (liczba < -10) {
            return (<div>Liczba jest mniejsza od -10 </div>)
        }
        else if (liczba < 0) {
            return (<div>Liczba jest mniejsza od zera </div>)
        }
    }

    const liczbaWiekszaOdZero = (liczba: number) => {
        if (liczba > 15) {
            return (<div>Liczba przekroczona </div>)
        }
        else if (liczba > 10) {
            return (<div>Liczba jest wieksza od dziesiec </div>)
        }
        else if (liczba > 0) {
            return (<div>Liczba jest wieksza od zero </div>)
        }
        
    }

    return (
        <div className="App">
            <CustomHeader>
                <Counter onNumberChange={handleNumberChange} />
                {liczbaMniejszaOdZera(changedNumber)}
                {liczbaWiekszaOdZero(changedNumber)}
            </CustomHeader>
        </div>
    );
}

export default App;
