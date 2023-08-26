import './styles/App.css';
import Board from './components/board/board';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Board/>
    </div>
  );
}

export default App;
