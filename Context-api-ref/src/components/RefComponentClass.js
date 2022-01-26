import React, { Component } from 'react';

 class RefComponentClass extends Component {
    
    constructor(props) {
        super(props)
        this.iRef=React.createRef()
        this.PRef=React.createRef()
    }

    componentDidMount(){
        console.log(this.iRef);
        this.iRef.current.focus()
    }
    
  render() {
     
    return <div>
    
    <input ref={this.iRef} type="text" placeholder='Enter name'/>
        <input ref={this.pRef} type="password" placeholder=' Enter Password'/>
        <button onClick={()=>{ this.pRef.current.focus()}}> Save</button>
    </div>;
  }
}
 export default  RefComponentClass;

 
  
 