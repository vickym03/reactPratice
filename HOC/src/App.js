import logo from './logo.svg';
import './App.css';
import CountOne from './component/CountOne';
import CountTwo from './component/CountTwo';

function App() {
  return (
    <div className="App">
      <CountOne userName= "Remo"/>
      <hr/>
      <CountTwo/>
    </div>
  );
}

export default App;
