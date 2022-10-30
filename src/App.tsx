import React from 'react';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import UserRepo from './components/UserRepo';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
    <NavBar/>
   <BrowserRouter>
   <Routes>
      <Route path="/" element ={< Home />}/>
      <Route path = "/:username" element={<UserRepo/>}/>
   </Routes>
   </BrowserRouter>
   </>

  );
}

export default App;
