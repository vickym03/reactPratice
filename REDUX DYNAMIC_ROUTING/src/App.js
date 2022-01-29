import logo from './logo.svg';
import './App.css';
import FetchApi from './components/FetchApi';
import PostLists from './components/PostLists';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <FetchApi/> */}
      <Route exact path="/" render={(props)=>{
        return <div>Home</div>
      }}/>

      <Route exact path="/posts"  component={PostLists}/>
      <Route exact path="/posts/:postId"  component={PostDetail}/>

      
    </div>
    </Router>
  );
}

export default App;
