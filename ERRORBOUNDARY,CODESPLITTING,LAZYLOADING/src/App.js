import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList';
import ErrorBoundary from './error-boundary/ErrorBoundary';
import PersonDetail from './components/PersonDetail';
import Err1 from './error-boundary/Err1';
import CalculatorComp from './components/CalculatorComp';
import React ,{ Suspense ,useState} from 'react'
import ComponentA from './components/ComponentA';

//React components lazy loading
const LazyComp = React.lazy (() => {
  return import('./components/ComponentA')
})

function App() {
  const [showComponent, setshowComponent] = useState(false);
  return (
    <div className="App">
      {/* <ErrorBoundary>
        <PersonList />
      </ErrorBoundary>
      <hr />
      <Err1>
        <PersonDetail />
      </Err1> */}

<CalculatorComp />
<button onClick = {()=> {
  setshowComponent(!showComponent)
}}>{showComponent ? 'Hide' :'show' }</button>

{/* {showComponent && <LazyComp />} */}
{showComponent && 
<Suspense fallback = {<div> loading .... </div>}>
  <LazyComp />
</Suspense>
// {showComponent ? <ComponentA /> :null}
/* <calculator /> */}

    </div>
  );
}

export default App;
