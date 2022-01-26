import React, { useContext,useEffect } from 'react';
import UserContext from '../context-api/UserContext';

function ComponentC(props) {
    const context=useContext(UserContext)
    useEffect(()=>{
        console.log('context',context);
    },[])
  return (
  <div>
{/* <p>ComponentC - {props.username}</p> */}
<p>ComponentC context api data-{context}</p>
  </div>
  )
}

export default ComponentC;
