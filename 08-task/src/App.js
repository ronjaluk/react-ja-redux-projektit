import logo from './logo.svg';
import './App.css';


const App = () => {
  const [lkm, asetaLkm] = useState(0);
    return (
      <div>
        <p>Olet painanut {lkm} kertaa</p>
        <button onClick={() => asetaLkm(lkm + 1)}>Paina</button>
        <button onClick={() => asetaLkm(0)}>Nollaa</button>
      </div>
    );
}

class App extends Component {
  state = {
    activeButton: '',
    buttonList: [],
    clicks : 0,
    showGameover: false,
    showStartgame: true
  }
export default App;
