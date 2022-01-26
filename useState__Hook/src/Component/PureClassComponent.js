import React, { Component, PureComponent } from 'react'

/*extend PureComponent to make class component Purecomponent*/ 
export  class PureClassComponent extends PureComponent {
    state = {                       
        userName: " ",
        age:10,
        address:{
            state: "Karnataka"
        }
    }
    updateName= () =>{
        console.log("updateName executed");
        this.setState({
            userName:"Jackson"
        })
    }

    updateAddress=()=>{
        this.setState({
            address:{
                state: "Tamil Nadu"
            }
        })
    }

    componentDidUpdate =()=>{
        console.log("componentDidUpdate executed ")
    }

    /*if we extends PureComponent react will do a shallow comparison of the previous satate and the next state
      We should not write shouldComponenetUpdate when extending  Purecomponet because reaxct will write the logic of 
      comparsion in  shouldComponenetUpdate*/ 
    //   shouldComponenetUpdate (nextProps,nextState){
    //       console.log("shouldComponenetUpdate excuted")
    //       console.log(nextState);
    //       console.log(this.state);
    //       if(nextState.userName !== this.state.userName){
    //           return true
    //       }else{
    //           return false
    //       }

    //   }


    render() {
        console.log("Render executed")
        return (
            <div>
                <p> User Name - {this.state.userName}</p>
                <p> User Address - {this.state.address.state}</p>
               
                <button onClick={this.updateName}> Update Name </button>    
                <button onClick={this.updateAddress}> Update Address </button>
            </div>
        )
    }
}
export default PureClassComponent;  