import './App.css';

//Components Import
import Nav from './Components/Nav/Nav';
import Aside from './Components/Aside/Aside';
import Board from './Components/Board/Board';



function App() {
  return (
    <div className="App">
     <Nav />
     <div className='grid gap-5 mt-8'>
      <Aside />
      <Board />
     </div>
    </div>
  );
}

export default App;
