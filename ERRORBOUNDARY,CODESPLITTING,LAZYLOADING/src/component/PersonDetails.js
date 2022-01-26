import React,{useState} from 'react';

function PersonDetails() {
    const [person, setPerson] = useState({
        userName: "tom",
        age: 10
    })
  return <div>
  <p> {person.userName.filter()}</p>
  </div>;
}

export default PersonDetails;
