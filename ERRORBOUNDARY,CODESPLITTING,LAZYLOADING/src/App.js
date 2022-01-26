
import './App.css';
import PersonaList from './component/PersonaList';
import PersonDetails from './component/PersonDetails';
import ErrorBoundary from './errorBounary/ErrorBoundary';
import { Err1 } from './errorBounary/Err1';
function App() {
  return (
    <div className="App">
    
    <ErrorBoundary>
    <PersonaList/>
    </ErrorBoundary>
    <hr/>
    <Err1>
    <PersonDetails/>
    </Err1>
    </div>
  );
}

export default App;
