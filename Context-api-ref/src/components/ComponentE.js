import React, { useContext, useEffect } from 'react';
import LoginContext from '../context-api/LoginContext';

function ComponentE() {
    let loginData=useContext(LoginContext)
    useEffect(()=>{
        console.log('Login Data',loginData);
        // {
        //     isLogin:true
        //     loggedInUser:'Keerthu'
        // }
    },[])
  return <div>
      ComponetE-{loginData.loggedInUser}
  </div>;
}

export default ComponentE;
