//if objects are array

import React,{ useReducer } from 'react';

const initialState={
  count:0
}

const reducer=(state,action)=>{
  const stateCopy={...state}

  switch(action.type){
    case 'increment':
         stateCopy.count=stateCopy.count+action.payload
         return stateCopy
    case 'decrement':
          stateCopy.count=stateCopy.count-action.payload
          return stateCopy
    case 'reset':
          return initialState
          default:return state
  }
}

function MyCounter1() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return <div>
    <p>Count-{state.count}</p>
    <button onClick={()=>dispatch({
      type:'increment',
      payload:100
    })}>Increment</button>
     <button onClick={()=>dispatch({
      type:'decrement',
      payload:20
    })}>Decrement</button>
     <button onClick={()=>dispatch({
      type:'reset',
    })}>Reset</button>
  </div>;
}

export default MyCounter1;
