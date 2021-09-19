
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Todos/>
      </div>
    </div>
  );
}

export default App;
