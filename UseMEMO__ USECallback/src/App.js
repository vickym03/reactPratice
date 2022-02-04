import logo from './logo.svg';
import './App.css';
import ParentComp from './components/ParentComp';
import Counter from './usememo/Counter';


function App() {
  return (
    <div className="App">
     <ParentComp/>
     <hr/>
     <Counter/>
    </div>
  );
}

export default App;
