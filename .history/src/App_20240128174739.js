import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Login from "./component/Login";
import React from "react";
import MovieList from "./component/MovieList";
import MovieListItem from "./component/MovieListItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movie">
          <Route index element={<MovieList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
