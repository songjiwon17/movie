import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Login from "./component/Login";
import React from "react";
import MovieList from "./component/MovieList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie" element={<MovieList />}></Route>
          <Route path="/movie/:id" element={<MovieListItem />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
