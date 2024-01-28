import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Login from "./component/Login";
import React from "react";
import MovieList from "./component/MovieList";
import MovieListItem from "./component/MovieListItem";
import MovieDetail from "./component/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movie" element={<MovieList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
