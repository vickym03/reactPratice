import React ,{useState} from 'react';
import UseHooks from '../Hooks/UseHooks';
function CounterTwoo(){
    //count[count, setCount]= useState(0);

    // let increment =()=>{
    //     setCount(count+1)
    // }

    // let decrement =()=>{
    //     setCount(count-1)
    // }

    // let reset =()=>{
    //     setCount(0)
    // }

    const [count,increment,decrement,  reset ] = UseHooks(10, 20);
  return <div>
  
  <p> Count one-{count}</p>
  <button onClick={()=>{increment(100)}}>increment</button>
  <button onClick={()=>{decrement()}}>decrement</button>
  <button onClick={()=>{reset()}}>reset</button>
  
  </div>;
}

export default CounterTwoo;
