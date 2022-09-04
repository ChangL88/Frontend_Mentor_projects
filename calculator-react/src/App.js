import './styles.css';
import Buttons from './js/buttons';
import Theme from './js/theme';

function App() {
  return (
    <div className="App">
        <main className="calc">
        <div className="container">
            <div className="outer">
                <h6>calc</h6>
                <p>THEME</p>
                <Theme />
            </div>
            <Buttons />
        </div>
        </main>
    </div>
  );
}
export default App;
