import React,{useEffect, useState} from 'react'

function UseEffect2() {

    const [count, setCount] = useState(0)
    /*useeffect will get executed when component is mounted tpo the real dom 
    (similar to componentDidMount of the class component)*/
    useEffect(()=>{
        console.log(" componentDidMount useEffect executed");

        /*the return callback function will get executed when component is about to unmount from the real dom 
         (similar to componentWillUnmount of the class component)*/
        return()=>{
            console.log(" componentWillUnmount useEffect executed");
        }
    },[])

      /*useeffect will get executed when the count  is changed 
    (similar to componentDidUpdate of the class component*/
        useEffect(()=>{
          if(count!==0){
            console.log("componentDidUpdate  useEffect executed")
          }
        },[count])

    const increaseCount=()=>{
        setCount (count+1)
    }
    return (
        <div>
        <p> useEffect1</p>
        <hr/>
        <p> count - {count}</p>
            <button onClick={increaseCount}> Increase </button>
        </div>
    )
}

export default UseEffect2
