import './App.css';

//Components Import
import Nav from './Components/Nav/Nav';
import Aside from './Components/Aside/Aside';
import Board from './Components/Board/Board';
// import Description from './Components/Description/Description';


function App() {
  return (
    <div className="App">
     <Nav />
     <div className='grid gap-5 mt-8'>
      <Aside />
      
      <Board />
     </div>

    {/* <Description /> */}
  


      
    </div>
  );
}

export default App;
