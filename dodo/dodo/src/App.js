import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Routes,Route } from 'react-router-dom';
import Statebasics from './components/Statebasics';
import Use from './components/Use';
import Counter from './components/Counter';
import Viewdata from './components/Viewdata';




function App() {
  return (
    <div className="App">
      {/* <h1>heloo </h1>  */}
      {/* <Login/> */}
      {/* <Signup/> */}
      
      <Navbar/>
      <Routes>
        <Route path='/reg' element={<Register/>}/>
        <Route path='/u' element={<Statebasics/>}/>
        <Route path='/c'element={<Counter/>}/>
        <Route path='/l'element={<Use/>}/>
        <Route path='/v'element={<Viewdata/>}/>

        
      </Routes>
      
    </div>
  );
}

export default App;
