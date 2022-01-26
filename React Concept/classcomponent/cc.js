class Header extends React.Component{
    render(){
        return <h1> Header</h1>
    }
}

class Content extends React.Component{
    render(){
        return <p> Content </p>
    }
}

class Footer extends React.Component{
    render(){
        return <p> Footer </p>
    }
}

ReactDOM.render( <div>
    <Header/>
    <Content/>
    <Footer/>
</div>, document.getElementById("container"))