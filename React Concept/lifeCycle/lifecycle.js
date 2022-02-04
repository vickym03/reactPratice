class LifeCycleComponent extends React.Component {

    constructor(props) {
        super(props)
        console.log('inside constructor method 1');
        /* 1. initialize the state or data members
           2. to bind methods 
        */
        this.state = {
            userName: 'Ajay',
            age: 10,
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('inside getDerivedStateFromProps 1');
        /* can return new state or return null */
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('inside shouldComponentUpdate 2');
        console.log(this.state);
        console.log(nextState);
        /* either return true or false
        if return true component will be updated
        if return false component will not be updated */
        /* compare prevState and nextState 
        if both are same return false else return true */
        if (this.state.userName === nextState.userName
            && this.state.age === nextState.age) {
            return false
        } else {
            return true
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('inside getSnapshotBeforeUpdate 2');
        console.log(prevState);
        return 'this is before update'
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('inside componentDidUpdate 2');
        /* this method will be called once the 
        component is updated into the real dom
            1. API calls (side effects)
            2. business logics
            3. interact with DOM
         */
    }
    componentWillUnmount() {
        console.log('inside componentWillUnmount 3');
        /* unsubscribe to any third apis 
           clear any localstorage data/ sessionStorage
           clearInterval, clearTimeout
        */
    }
    render() {
        /* Write the UI / JSX code */
        console.log('inside render method 1');
        return <div>
            Hello - {this.state.userName}
            <button
                onClick={() => {
                    this.setState({
                        userName: 'Guru'
                    })
                }}>Update Name</button>
            <p>Age - {this.state.age}</p>
            <button
                onClick={() => {
                    this.setState({
                        age: 45
                    })
                }}>Update Age</button>

            {this.state.age === 10 ? <ChildComponent /> :
                null
            }
        </div>
    }
    componentDidMount() {
        console.log('inside componentDidMount 1');
        /* this method will be called once the 
        component is rendered into the real dom
            1. API calls (side effects)
            2. business logics
            3. subscribe to third party apis
            4. interact with DOM
         */
    }
}

class ChildComponent extends React.Component {
    componentWillUnmount() {
        console.log('inside child componentWillUnmount');
    }
    render() {
        return <div>
            Child Component
        </div>
    }
}
ReactDOM.render(<LifeCycleComponent />,
    document.getElementById('container'))