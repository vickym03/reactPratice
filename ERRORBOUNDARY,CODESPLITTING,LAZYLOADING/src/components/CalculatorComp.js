import React from 'react';
// import CalculatorComp from '../utils/calculator'


function CalculatorComp() {

    const handleClick = (n1,n2) => {
        // const sum = add(n1,n2)
        // console.log('sum',sum);

        //dynamic import
        //code splitting
        //to increase the performance of the application
        //to decrease the page load time
        import ('../utils/calculator.js').then((calci) => {
            const sum = calci.add(n1,n2)
            console.log('sum',sum);
        })
    }
  return <div>
      <button onClick = {() => {
          handleClick(10,20)
      }}>Add</button>
  </div>;
}

export default CalculatorComp;
