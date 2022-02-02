import './Person.css';

const Person = (props) => {
  return (
    <section className="Person">
    <h1>React app putsattu!</h1>
    <p>Hello, my name is {props.name}, and I'm {props.age} years old.</p>
    </section>
  );
}

export default Person;


