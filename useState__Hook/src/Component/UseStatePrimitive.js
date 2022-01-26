import React ,{useEffect, useState}from 'react'

function UseStatePrimitive() {
    const [userName , setuserName] = useState('')
    const [count, setcount] = useState(0)

    // if the value of the dependence is changed the below useEffects will get executed 
    // wrt(primitive type)
    
    useEffect(()=>{
        if(count !==0){
            console.log("count is changed")
        }
    },[count])

    const updateName=()=>{
        console.log("updated function is executed")
        setuserName("Guru")
    }

    const updateCount=()=>{
        console.log("update count dunction called")
        setcount (count + 5)
    }
    
    useEffect(()=>{
        if(userName!==""){
            console.log("username is changed")
        }
    },[userName])
    return (
        <div>
            {console.log('useStatePrimitivr return executed')}
            <p> User Name -{userName}</p>
            <button onClick={updateName}>Updated name </button>
            <p> count - {count}</p>
            <button onClick={updateCount}>Updated count </button>
        </div>
    )
}
/* Make function component as pure component using React.memo*/ 
export default React.memo(UseStatePrimitive)
