function MyComponent(props) {
  console.log(props);
  return (
    <div>
      <p> Welcome {props.firstName}</p>
      <h1>Hello</h1>
      {props.childern}
    </div>
  );
}
ReactDOM.render(
  <MyComponent id="component" firstName="MS Dhoni">
    <h1>Text</h1>
  </MyComponent>,
  document.getElementById("container")
);
