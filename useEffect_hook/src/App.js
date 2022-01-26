
import './App.css';
import UseEffect1 from './component/UseEffect1';
import UseEffect2 from './component/UseEffect2';
import React ,{useState} from 'react';
import UseEffect3 from './component/UseEffect3';
import UseEffect4 from './component/UseEffect4';

function App() {
  const [showComponent , setshowComponent] = useState(true)
  return (
    <div className="App">
     <UseEffect1/> 
   
     <button onClick={()=>{
       setshowComponent(!showComponent)
      }}>{showComponent ? 'hide':'show'}component </button>
     <hr />
     {showComponent ? <UseEffect2/> :null}

      <hr />
     <UseEffect3/>
     <button onClick={()=>{
      setshowComponent(!showComponent)
     }}>{showComponent ? 'hide':'show'}component </button>
     <UseEffect4 showComponent={showComponent}/>
    </div>
  );
}

export default App;
