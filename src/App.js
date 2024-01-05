import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;