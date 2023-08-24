import './styles/App.css';
import Board from './components/board';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Board/>
    </div>
  );
}

export default App;
