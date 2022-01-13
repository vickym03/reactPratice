class ParenetComponent extends React.Component {
    state = {
        userName : "tom Jack"
    }
    updateUserName = (value)=>{
        console.log(value);
        this.setState ({
            userName:value
        })
    }

render(){
    return <div>
ParenetComponent - {this.state.userName}
<button onClick={()=>{
     this.updateUserName('parent name')}}> Upadate Name</button>

<ChildComponent userName={this.state.userName}
        updateName = {this.updateUserName}/>
    </div>
}

}

class ChildComponent extends React.Component {
    state ={
        uname: "child Name"
    }

    render() {
        console.log(this.props)
        return <div>
            ChildComponent -{this.props.userName}
            <button onClick={()=>{
                this.props.updateName(this.state.uname)
            }}> Upadate UserNamwe for child  </button>
        </div>
    }
}

ReactDOM. render(<ParenetComponent/> , document.getElementById("container"))