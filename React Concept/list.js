const listElement = React.createElement('ul', null, 
 React.createElement('li', null,"bat" ),
 React.createElement('li', null,"ball" ),
 React.createElement('li', null,"wicket" )
)
console.log(listElement);
const element = React.createElement('h1', null, 'monkey')

const hobbies=['swimming','driving','bird watching']
const hobbiesList = React.createElement('ul', null,
hobbies.map((hobby,index)=>{
    return React.createElement('li', {
        key : index
    },hobby)
}))

const divElement = React.createElement('div', null, listElement,element,hobbiesList
)

ReactDOM.render(divElement, document.getElementById('list'))