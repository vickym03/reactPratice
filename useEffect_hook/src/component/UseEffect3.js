import React,{useEffect, useState} from 'react'

function UseEffect3() {
    const [count, setCount]= useState(0)
    const [age, setAge]=useState(0)

    useEffect(() => {
       console.log("componentDidMount useEffect executed")
    }, [])

    useEffect(() => {
        if(count!==0){
            console.log("count componentDidUpdate useEffect executed")
        }
     }, [count])

     useEffect(() => {
        if(age!==0){
            console.log("age componentDidUpdate useEffect executed")
        }
     }, [age])

     useEffect(() => {
            console.log("count or age componentDidUpdate useEffect executed")
     }, [count, age])

     const increaseCount =()=>{
         setCount(count+1)
     }

     const increaseAge = ()=>{
         setAge(age+10)
     }

    return (
        <div>
            <p> UseEffect</p>
            <p> Count - {count}</p>
            <button onClick={increaseCount}>IncreaseCount </button>
            <p> Age - {age}</p>
            <button onClick={increaseAge}>IncreaseAge </button>
            
        </div>
    )
}

export default UseEffect3
