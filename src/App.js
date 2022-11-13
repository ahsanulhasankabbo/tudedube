import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/body' element={<Body></Body>}></Route>
      </Routes>
    </div>
  );
}

export default App;
