import React, { useState } from 'react';
import Nappi from './Nappi';
import Tulos from './Tulos';
 
const App = () => {
  const [arvo1, setArvo] = useState(0)
  const [arvo2, setArvo2] = useState(0)
 
  const aseta = uusiArvo => {
    setArvo(uusiArvo)
  }

  const summa = arvo1 + arvo2;
 
  return (
    <div>
      <Tulos arvo1={arvo1} />
      <Nappi handleClick={() => aseta(arvo1 + 1)} teksti="+1" />
      <Nappi handleClick={() => aseta(arvo1 - 1)} teksti="-1" />
      <Nappi handleClick={() => aseta(arvo1 + 2)} teksti="+2" />
      <Nappi handleClick={() => aseta(arvo1 - 2)} teksti="-2" /> 
      <Nappi handleClick={() => aseta(0)} teksti="nollaa" />
      <h1>{summa}</h1>
    
    </div>
    
  )
}

     

 
export default App;