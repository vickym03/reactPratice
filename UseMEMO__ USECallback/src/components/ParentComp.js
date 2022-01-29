import React, { useCallback, useState } from 'react';
import Button from './Button';
import DataCount from './DataCount';
import Title from './Title';

function ParentComp() {
    const [age, setAge]= useState(10)
    const[salary, setSalary] = useState(10000);

    //Return the memoized value
    const incrementAge = useCallback(()=>{
        setAge (age+1)
    },[age])

    const incrementSalary = useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
  return <div>
  <Title/>
  <DataCount count={age} text="age"/>
 
  <Button handleClick={incrementAge}> incrementAge</Button>
  <DataCount count ={salary} text="Salary"/>
  <Button handleClick={incrementSalary}> incrementSalary</Button>
  </div>;
}

export default ParentComp;
