import './App.css';
import Person from './person/Person';

const personel = [
  {name: "John", age: 25},
  {name: "Mary", age: 24},
  {name: "Kid", age: 3},
]

const App =() => {
  return(
    <div className="App">
      <Person name={personel[0].name} age={personel[0].age} />
      <Person name={personel[1].name} age={personel[1].age} />
      <Person name={personel[2].name} age={personel[2].age} />
    </div>
  )
}


export default Person;
