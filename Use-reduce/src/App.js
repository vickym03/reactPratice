
import './App.css';
import { useReducer } from 'react'
import MyCounter1 from './components/MyCounter1';
//import MyCounter2 from './components/MyCounter2';


const initialState=0

const reducer=(state,action)=>{
  console.log('state',state);
  console.log('action',action);

  if(action=== 'increment'){
    //console.log('aa');
    return state+10
  }else if(action==='decrement'){
    return state-10
  }else if (action==='reset'){
    return initialState
  }
  return state
}

function App() {

  /* useReducer takes 3 parametr */
  const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div className="App">
      <p>state-{state}</p>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
      <hr />
      <MyCounter1 />
      <hr />
      {/*<MyCounter2 />*/}

    </div>
  );
}

export default App;
