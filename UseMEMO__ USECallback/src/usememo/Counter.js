import React, { useMemo, useState } from 'react';

function Counter() {
    const [counterOne, setcounterOne] = useState(0);
    const [counterTwo, setcounterTwo] = useState(0);
    const incrementCountOne=()=>{
        setcounterOne(counterOne+1)
    }
    const incrementCountTwo=()=>{
        setcounterTwo(counterTwo+1)
    }
    /*
    the callback function should get executed only when the dependency is changed else it should return the memoized value i.e.,(latest obtained result)
     */
    const isEven=useMemo(()=>{
        console.log('isEven is executed');
        let i=0;
        while(i<20000000){
            i++
        }
        return counterTwo%2===0
    },[counterTwo])
  return <div>
      <div>Counter  One -{counterOne}</div>
      <div>Counter Two- {counterTwo}</div>
      <span>{isEven?'Even':'Odd'}</span>
      <button onClick={incrementCountOne}>increment One</button>
      <button onClick={incrementCountTwo}>increment Two</button>

  </div>;
}

export default Counter;







