import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy5, decrementBy5 } from './redux/slices/counterSlice.js';
import Navbar from './components/Navbar.jsx';

const App = () => {

  const dispatch = useDispatch();
  const num = useSelector((state) => state.counter.value);

  return (
    <>
      <Navbar />
      <h1>{num}</h1>

      <button
        onClick={() => { dispatch(increment()) }}
      >increment</button>

      <button
        onClick={() => { dispatch(decrement()) }}
      >decrement</button>

      <button
        onClick={() => { dispatch(incrementBy5()) }}
      >incrementBy5</button>

      <button
        onClick={() => { dispatch(decrementBy5()) }}
      >decrementBy5</button>
    </>
  )
}

export default App