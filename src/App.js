import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Setting from './Components/pages/Setting';
import Nabar from './Nabar';

function App() {
  return (
    <div className="App">
     {/* <Routes>
      <Route path='/' exact element={<Home/>}></Route>
      <Route path='about' exact element={<About/>}></Route>
      <Route path='setting' exact element={<Setting/>}></Route>
     </Routes> */}
     <Nabar/>
    </div>
  );
}

export default App;
