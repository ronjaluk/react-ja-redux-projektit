// const Nappi = (props) => (
//     <button onClick={props.handleClick}>
//       {props.teksti}
//     </button>
//   )
 
const Nappi = ({ handleClick, teksti }) => (
    <button onClick={handleClick}>
      {teksti}
    </button>
  )
 
  export default Nappi;