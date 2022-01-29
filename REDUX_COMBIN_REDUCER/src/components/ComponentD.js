import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/actions/actions';

function ComponentD() {
   const countState= useSelector(state=>state.countReducer)
   const dispatch=useDispatch()
  return <div>
<p>Count in ComponentD -{countState.count}</p>
<button onClick={()=>{dispatch(increment())}}>increment</button>
  </div>;
}

export default ComponentD;