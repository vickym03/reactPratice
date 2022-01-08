function Header(){
    return <h1>Header</h1>
}

function Content() {
    return <p>Content</p>
}

function Footer(){
    return <span> Footer</span>
}

//React.createElement('h1')
//<h1></h1>

//React.createElement('Header')
//<Header></Header>

const containerElement = <div>
    <Header/>
    <Content/>
    <Content/>
    <Content/>
    <Footer/>
</div>

ReactDOM.render(containerElement, document.getElementById("container"))