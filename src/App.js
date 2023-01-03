import React,{useState} from 'react';
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Gridcomp from './Components/Gridcomp';
import Appbar from './Components/Appbar';
import RealProject from './Components/RealProject'
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import Loggingin from './Components/Loggingin';
// import Front_Page_Project from './Components/Front_Page_Project';

const App=()=>{
  const [items, setItems] = useState(false);
 
return(
  <>
  <BrowserRouter>
 
    <Routes>
      <Route path="/" element={<> <Appbar items={items} setItems={setItems}/><Home /></>} />
      <Route path="home" element={<><Appbar  items={items} setItems={setItems}/><Home /></>} />
      <Route path="profile" element={<><Appbar  items={items} setItems={setItems}/><Profile /></>} />
      <Route path="about" element={<><Appbar  items={items} setItems={setItems}/><About /></>} />
      <Route path="Friends" element={<><Appbar  items={items} setItems={setItems}/><Gridcomp /></>} />
      <Route path="Login-Signup" element={<><Appbar  items={items} setItems={setItems}/><RealProject setItems={setItems}/></>} />
      <Route path="Signup" element={<><Appbar  items={items} setItems={setItems}/><Signup /></>} />
      <Route path="loggingin" element={<><Appbar  items={items} setItems={setItems}/><Loggingin /></>} />
      {/* <Route path="Front_Page_Project" element={<><Appbar  items={items} setItems={setItems}/><Front_Page_Project /></>} /> */}
    </Routes>
  </BrowserRouter>
  </>
)};

export default App;

