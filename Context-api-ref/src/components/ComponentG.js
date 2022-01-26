import React, { Component } from 'react';
import UserContext, { UserConsumer } from '../context-api/UserContext';

export class ComponentG extends Component {
    static contextType=UserContext
    componentDidMount() {
      console.log(this);
      console.log(this.context);
    }
    
  render() {
    return (
    <div>
<UserConsumer>
    {
        (contextData)=>{
            return <p>ComponentG-{contextData}</p>
        }
    }
</UserConsumer>
<p>Name-{this.context}</p>
    </div>
     ) }
}

export default ComponentG;
