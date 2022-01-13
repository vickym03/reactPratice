//passing data from parent to child
function ParentComponent() {
    const age = 80;
    return <div>
        <h3> ParentComponent</h3>
        <ChildComponent parentAge={age}/>
    </div>
}

function ChildComponent(props){
    console.log(props);
    return <p> ChildComponent {props.parentAge}</p>
}

ReactDOM.render(<ParentComponent/>,
    document.getElementById('container'))