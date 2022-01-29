import React, { useState,useEffect } from 'react';
import axios from 'axios';


function FetchApi() {

    const [fetch, setfetch] = useState([]);

    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res);
            setfetch(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    

  return <div>
      <button>search</button>
      <input type="text" />
      <br/>
      <button>Ascending</button>
      
      <br/>
      <button>Descending</button>
      
      
      {fetch.map((data, index)=>
      {
          return <div>
                    <ul className="list-group" key={index} style={{margin:'auto'}}>
                    <li className="list-group-item active" aria-current="true" ><b>Id</b>-{data.id}   <b>Title</b>-{data.title}</li>
                    {/* <li className="list-group-item">Id-{data.id}</li>
                    <li className="list-group-item">title-{data.title}</li>
                    <li className="list-group-item">Body-{data.body}</li> */}
  
</ul>
          </div>
      })}
      
  </div>;
}

export default FetchApi;

