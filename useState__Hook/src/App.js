import { PureClassComponent } from './Component/PureClassComponent';
import{useState} from 'react';
import UseStatePrimitive from './Component/UseStatePrimitive';
import UseStateObject from './Component/UseStateObject';
import UseStateArray from './Component/UseStateArray';
import './App.css';


function App() {
  const [isAdmin , setisAdmin] = useState(false)
  return (
    <div className="App">
    <h3> PureClassComponent</h3>
      <PureClassComponent/>
      <p> {isAdmin ? 'Admin' : 'User'}</p>
      <button onClick={()=>{setisAdmin(!isAdmin)}}>update Admin  </button>
      <hr/>
      <h3> UseStatePrimitive</h3>
    <UseStatePrimitive/>
    <hr/>
    <h3> UseStateObject</h3>
    <UseStateObject/>
    <hr/>
    <h3> UseStateArray</h3>
    <UseStateArray/>
    </div>
  );
}

export default App;
