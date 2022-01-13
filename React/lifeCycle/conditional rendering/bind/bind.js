class MyComponent extends React.Component {
  state = {
    userName: "Manoj",
  };

  constructor(props) {
    super(props);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
  }

  handleClick0() {
    console.log("this will be undefined handleClick");
    //this will be undefined
    console.log(this);
    //console.log(this.state.userName)
  }
  /* to ovwecome the problem of this undefined we shlould use arrow function*/

  handleClick = () => {
    console.log("handledclick arrow function");
    console.log(this);
  }

  handleClick1 = () => {
    console.log("bind in inclick handleclick1");
    console.log(this);
  }

  handleClick2 = () => {
    console.log("bind in inclick handleclick2");
    console.log(this);
  }

  handleClick3 = () => {
    console.log("bind in inclick handleclick3");
    console.log(this);
  }

  handleClick4 = () => {
    console.log("bind in inclick handleclick4");
    console.log(this);
  }

  render(){
      return<div>
          <p> My Component</p>
          <button onClick={this.handleClick0}> click 0</button>
          <button onClick={this.handleClick}> click </button>
          <button onClick={this.handleClick1.bind(this)}> click 1</button>
          <button onClick={this.handleClick2.bind(this)}> click 2</button>
          <button onClick={this.handleClick3}> click 3</button>
          <button onClick={this.handleClick4}> click 4</button>
      </div>
  }
}
ReactDOM.render(<MyComponent />, document.getElementById("container"));
