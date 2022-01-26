import React from 'react';
import ComponentC from './ComponentC';

function ComponentB(props) {
  return (
  <div>
       {/* ComponentA-{props.username} */}
      {/* <ComponentC username={props.username}/> */}
      <ComponentC/>
  </div>
  )
}

export default ComponentB;
