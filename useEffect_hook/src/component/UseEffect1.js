import React,{useEffect, useState} from 'react'

function UseEffect1() {
    const [count, setCount] = useState(0)
    /*never ever write the useeffect like this useEffect will be executed on component mount as well as stste 
    or props change and component unmount*/
    useEffect(()=>{
        console.log("useEffect executed")
    })

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

export default UseEffect1
