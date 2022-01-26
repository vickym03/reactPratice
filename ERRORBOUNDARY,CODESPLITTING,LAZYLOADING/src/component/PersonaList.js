import React ,{useState}from 'react';

function PersonaList() {

    const [person,setPerson] = useState([{
        userName: "tomm",
        age: 12
    },{
        userName: "Jerry",
        age: 90
    }
]);
  return <div>
  {
      person.map((person,index)=>{
          return <p key={index}>{person.userName}</p>
      })
  }
  </div>;


}

export default PersonaList;
