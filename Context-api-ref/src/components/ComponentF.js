import React, { useContext } from 'react';
import DataContext from '../context-api/DataContext';


function ComponentF() {
    let data=useContext(DataContext)
  return (
  <div>
ComponentF-{data}
<button onClick={()=>{
    data='999'
    console.log(data);
}}>Updated data</button>
  </div>
  )
}
export default ComponentF