import './App.css';
import Counter from './components/Counter';
import ComponentA from './components/ComponentA';
import {login } from './redux/actions/actions'
import {useDispatch ,useSelector} from 'react-redux';


function App() {
  const authState =useSelector(state => state.authReducer)
  const dispatch =useDispatch()
  console.log('authState',authState);
  return (
    <div className="App">
      {authState.isLogin ? <>
     <Counter />
     <hr />
     <ComponentA />
     <button onClick ={()=> {
       dispatch(login(false))
     }}>Logout</button>
   
    </>:
     <button onClick ={()=> {
      dispatch(login(true))
    }}>Login</button>}
    </div>
  );
}

export default App;
