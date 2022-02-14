import "./App.css";
import Home from "./component/Home";
import Aboutus from "./component/Aboutus";
import Contact from "./component/Contact";
import ContactFile from "./component/ContactFile";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
 y         <nav style={{ backgroundColor: "yellowgreen" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Link to="/">App</Link>
              <Link to="/home">Home</Link>
              <Link to="/aboutus">About us</Link>
              <Link to="/contact">Contact us</Link>
            </div>
          </nav>
          <Route
            exact={true}
            path="/"
            render={(props) => {
              console.log(props);
              return "App Compoment";
            }
            }
          />
          <Route path="/home" component={Home} />
          <Route exact={true} path="/contact" component={Contact} />
          <Route exact path="/contact/contactfile" component={ContactFile} />
          <Route path="/Aboutus" component={Aboutus} />
        </div>

        {/*
    <Home/>
    <Contact/>
    <Aboutus/>
    <ContactFile/> */}
      </div>
    </Router>
  );
}

export default App;
