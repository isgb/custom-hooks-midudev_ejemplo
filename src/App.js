import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const useCount = () => {

  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return {
    counter,
    increase,
    decrement,
    reset
  }
}

function App() {

  CONST {counter , increase, decrement, reset} = useCount();

  return (
   <div>
    <div>{counter}</div>
    <button onClick={increase}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>Zero</button>
   </div>
  );
}

export default App;
