import './styles.css';
import Buttons from './js/buttons';

function App() {
  return (
    <div className="App">
        <main className="calc">
        <div className="container">
            <div className="outer">
                <h6>calc</h6>
                <p>THEME</p>
                <div className="theme">
                    <div className="theme_count ">
                        <span>1 2 3</span>
                        <input type="range" min="1" max="3" defaultValue="1" id="slider" className="slider " />
                    </div>
                </div>
            </div>
            <Buttons />
        </div>
        </main>
    </div>
  );
}
export default App;
