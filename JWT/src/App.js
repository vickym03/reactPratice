import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Login from './components/Login';
import authToken from './authToken/authToken';

function App() {

  let tokenCredentials = authToken()
  return (
    <BrowserRouter>
    <div className="App">
     
     <AppNavbar />

     {!tokenCredentials && <Route path="/login" component={Login}/>}
     
     {tokenCredentials && tokenCredentials.token && <Route path="/products" component={Products}/>}
     {/* <Users /> */}

     {/* <Products /> */}


    </div>
    </BrowserRouter>
    
  );
}
export default App;
