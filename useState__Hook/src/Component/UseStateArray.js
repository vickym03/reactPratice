
import React ,{useEffect, useState}from 'react'


function UseStateArray() {
    const [hobbies, sethobbies] = useState([])

    const addHobbies = ()=>{
        // hobbies.push('cricket')
        // sethobbies(hobbies) 

        //first way
        // sethobbies([...hobbies,"cricket"])

        //second way
        // const hobbiesCopy = hobbies.slice(0)
        // hobbiesCopy.push("cricket")
        // sethobbies(hobbiesCopy)

        //third way
        const hobbiesCopy = [...hobbies]
        hobbiesCopy.push('cricket')
        sethobbies(hobbiesCopy)
    }

    useEffect(()=>{
        console.log("hobbies is changed")
    },[hobbies])

    return (
        <div>
            {
                hobbies.map((hobby,index)=>{
                    return<p key ={index}>{hobby}</p>
                })
            }
            <button onClick={addHobbies}>  Add</button>
        </div>
    )
}

export default UseStateArray
