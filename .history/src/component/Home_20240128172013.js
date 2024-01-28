import Header from "./Header";
/* import SearchForm from './SearchForm'; */
import * as React from "react";
import { Container } from "@mui/material";

function Home() {
  return (
    <Container fixed sx={{ mt: 10, padding: 10 }}>
      <Header />
      {/* <SearchForm/> */}
    </Container>
  );
}
export default Home;
