class MyComponent extends React.Component {
    state= {
        firstName: "David  ",
        lastName:"K"
    }

    updatedName = (fname)=>{
        console.log("before firstname", this.state.firstName);
        console.log("before lastname", this.state.lastName);
        //never ever update state like below
        // this.state.firstName = "ravi"
       
        /*
         1. state  are mutable
         2. setState  is asynchronous*/
             this.setState({
            lastName: "s "
        })
        console.log("after lastname", this.state.lastName);
       /*
        Second parameter for setSate is a callback function.it will be excuted once the state 
        is updated
       */ 
        this.setState({
            firstName: "Billa "
        } ,()=>{
             console.log("after", this.state.firstName);
        })

        
       
    }
    render(){
        return <div>
            FirstName - {this.state.firstName}
            <hr/>
            <button onClick={this.updatedName}> update name </button>
            <button onClick={()=>{this.updatedName("tom")}}> update name </button>
        </div>
    }
}
ReactDOM.render(<MyComponent/>, document.getElementById("container"))