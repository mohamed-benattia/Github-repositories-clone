import React from 'react';
import Home from './components/HomePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import'./layout/Repositories.css';
import UserRepo from './components/repositories/UserPage';
import NavBar from './components/Navbar';
import NotFound from './components/404Page';

function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={< Home />}/>
      <Route path = "/:username" element={<UserRepo/>}/>
      <Route path="/404" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
