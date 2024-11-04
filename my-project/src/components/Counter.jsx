// src/components/Counter.js

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement,reset } from '../features/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div style={{ color: '#FFF', textAlign: 'center', marginTop: '20%' ,display: 'flex', alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
     <div >
     <h1>Counter: {count}</h1>
     </div>
      <div style={{ display: 'flex',justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
