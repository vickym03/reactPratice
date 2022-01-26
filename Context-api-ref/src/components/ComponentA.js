import React from 'react';
import ComponentB from './ComponentB';

function ComponentA(props) {
  return (
  <div>
      {/* ComponentA-{props.username} */}
      {/* <ComponentB username={props.username}/> */}
      <ComponentB/>

  </div>
  )
}

export default ComponentA;
