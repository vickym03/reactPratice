import "./App.css";

import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
     
        <div className="App">
          <div className="App-link">
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
          </div>
       

        <div>
          <Route path="/home"
            render={(props) => {
              return <Home userName="Jerry !" />;
            }}
          />
          <Route path="/login" component={Login} />
        </div>
      </div>
    </Router>
  );
}

export default App;
