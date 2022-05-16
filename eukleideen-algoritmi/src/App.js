import "./App.css";

import Lasku from "./components/Lasku";

function App() {
  let Luvut = {
    luku1: 1220,
    luku2: 516,
    }
  return (
    <div className="App">
      <p>
        Algoritmi on yksityiskohtainen kuvaus tai ohje siitä, miten tehtävä tai
        prosessi suoritetaan; jota seuraamalla voidaan ratkaista tietty ongelma.
      </p>
      <p>
        Eukleideen algoritmin on keino, jonka avulla voidaan selvittää kahden
        kokonaisluvun suurin yhteinen tekijä (
      </p>
      <Lasku luku1 = {Luvut.luku1} luku2 = {Luvut.luku2} />
    </div>
  );
}

export default App;
