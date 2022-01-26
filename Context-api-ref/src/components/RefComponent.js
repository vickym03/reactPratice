import React ,{useEffect,useRef}from 'react';

function RefComponent() {
    const inputRef = useRef('Hello')
    const passwordRef= useRef()
    useEffect(()=>{
        console.log("inputref", inputRef);
        console.log("passwordRef",passwordRef.current );
        inputRef.current.focus()
    },[])
  return <div>
        <input ref={inputRef} type="text" placeholder='Enter name'/>
        <input ref={passwordRef} type="password" placeholder=' Enter Password'/>
        <button onClick={()=>{ passwordRef.current.focus()}}> Save</button>
  </div>;
}

export default RefComponent;
