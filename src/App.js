import logo from './logo.svg';
import './App.css';
import { CoordPaper } from './components/common/CoordPaper';
import { MapControllsPaper } from './components/common/MapControlsPaper';

function App() {
  return (
    <div className="App">
      <CoordPaper/>
      <MapControllsPaper/>
    </div>
  );
}

export default App;
