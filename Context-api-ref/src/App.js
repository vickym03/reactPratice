
import { useState } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentD from './components/ComponentD';
import ComponentF from './components/ComponentF';
import ComponentG from './components/ComponentG';
import RefComponent from './components/RefComponent';
import RefComponentClass from './components/RefComponentClass';
import { DataProvider } from './context-api/DataContext';
import { LoginProvider } from './context-api/LoginContext';
import { UserProvider } from './context-api/UserContext';


function App() {
  const [username,setusername]=useState('Jerry')
  const[loginData,setloginData]=useState({
    isLogin:true,
    loggedInUser:'Tommy'
  })
  let myData='111'
  return (
    <div className="App">
      Context API
      <button onClick={()=>{
        setusername('spike')
      }}>Update user name</button>
      
      <UserProvider value={username}>
        {/* <ComponentA username={username} */}
        <ComponentA/>
        <ComponentG/>
      </UserProvider>

      <LoginProvider value={loginData}>
        <ComponentD/>
      </LoginProvider>

      <DataProvider value={myData}>
        <ComponentF/>
      </DataProvider>

      <button onClick={()=>{
        myData='222'
        console.log(myData);
      }}>Update Data</button>

      <hr />

      <RefComponent/>
    <hr />

    <RefComponentClass/>
    </div>
  );
}

export default App;
