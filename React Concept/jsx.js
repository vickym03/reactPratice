const firstName = "Guru"
//jsx attribute
//key is string
//value can be string and aything other tan string should be wrapped inside a curly braces
//i.e, {}
const element = <h1
        id="test"
        person = {{firstName:'David'}}
        number = {[10,20,39]}
        age = {60}

> Welcome {firstName}, Age is {2+14}.</h1>
console.log(element);
// array

const cars = ["BMW", "Audi", "Porsche", "Benz"]
const carList = <ul>
    {
        cars.map((car,index)=>{
            return<li key={index}> {car}</li>
        })
    }
</ul>
console.log(carList);
const containerElements = <div>
    {element}
    {carList}
</div>
ReactDOM.render(containerElements, document.getElementById("container"))