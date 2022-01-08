class Header extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props);
    }
    render() {
        return <h1>Header {this.props.firstName}</h1>
    }
}

class Content extends React.Component {
    
    render() {
        return <div><p> Content</p> 
        {this.props.childern}</div>
    }
}

class Footer extends React.Component {
    
    render() {
        return <spam><p> Footer</p>
        </spam>
    }
}

ReactDOM.render(
    <div>
        <Header
        id="header"
        firstName= "Tom"/>
        <Content>
            <p> childern</p>
        </Content>
        <Footer/>
    </div>,
    document.getElementById("container")
)
