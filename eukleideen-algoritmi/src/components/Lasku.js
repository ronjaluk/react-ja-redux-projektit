const Lasku = (props) => {
    let R;
    let a = props.luku1;
    let b = props.luku2;
    console.log(props.luku1)
    console.log(props.luku2)
    console.log(a)
    console.log(b)
    while ((a % b) > 0)  {
        R = a % b;
        a = b;
        b = R;
      }
    return (
        <p>Lukujen {props.luku1} ja {props.luku2} suurin yhteinen jakaja on {b}</p>
    )
}

export default Lasku

function gcd(a, b) {
    
    return b;
  }