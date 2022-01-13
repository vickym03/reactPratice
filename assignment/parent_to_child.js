//Example passing data from child to parent
//in Class based componet
//1.

class FirstComponent extends React.Component {
    state = {
        name: 'Rambo'
    }
    changeName = (value) => {
        this.setState({
            name:value
        })
    }
    render() {
        return (
            <div>
                <p>Your Name is {this.state.name}</p>
<button onClick={()=>{this.changeName('Saka')}}>
    Change Parent Name
</button>
               
                <SecondComponet 
                updatedName={this.state.name}
                forChangeName={this.changeName}/>
            </div>
        )
    }
}

class SecondComponet extends React.Component {
    state = {
        name: 'Kambo'
    }
    render(){
        return (
            <div>
                <p>Second Component Name {this.state.name}</p>
                <p>Second Componet Name as Props-{this.props.updatedName}</p>
                <button onClick={()=>{this.props.forChangeName(this.state.name)}}>click to change</button>
            </div>
        )
    }
}
// ReactDOM.render(<FirstComponent/>,document.getElementById('container'))

//2.

class ParentComponet extends React.Component{
    state={
        age:26
    }
    changeAge=(value)=>{
        this.setState({
            age:value
        })
    }
    render(){
        return (
            <div>
                <p>Age of Parent Component is: {this.state.age}</p>
<button onClick={()=>{this.changeAge(27)}}>Change Age of Parent</button>
                <ChildComponent 
                changedAge={this.state.age}
                forChangeAge={this.changeAge}/>
            </div>
        )
    }
}
class ChildComponent extends React.Component{
    state={
        age:23
    }
    render(){
        return (
            <div>
                <p>Age of Child Component is: {this.state.age}</p>
                <p>New age according to Parent: {this.props.changedAge}</p>
                <button onClick={()=>{this.props.forChangeAge(this.state.age)}}>change Parent Age</button>
            </div>
        )
    }
}

// ReactDOM.render(<ParentComponet/>,document.getElementById('container'))

//By using function based Component
//pass data from child to parent
//3.

function First(){
    const [name,changeName]=React.useState('Rambo');
    return (
        <div>
            <p>First Component Name:{name}</p>
            <button onClick={()=>{changeName('Kambo')}}>Change First component Name</button>
            <Second 
            newName={name}
            forChangeNewName={changeName}/>
        </div>
    )
}
function Second(props){
    const [sName,changedName]=React.useState('Sambo')
    return (
        <div>
            <p>Second Component name Is:{sName}</p>
            <p>Second Component parent name is:{props.newName}</p>
            <button onClick={()=>{props.forChangeNewName(sName)}}>change parent name from child comp</button>
        </div>
    )
}
ReactDOM.render(<First/>,document.getElementById('container'))