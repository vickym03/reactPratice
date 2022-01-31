import React, { useState } from "react";


const UseHooks =(initialValue,val)=>{
  const [count, setCount] = useState(initialValue);

  let increment = (value) => {
    if (!isNaN) {
      setCount(count + val + value);
    } else {
      setCount(count + val);
    }
  };

  let decrement = (value) => {
    if (!isNaN) {
      setCount(count - val - value);
    } else {
      setCount(count - val);
    }
  };

  let reset = () => {
    setCount(initialValue);
  };

  return [count,increment,decrement,reset]
}

export default UseHooks;
