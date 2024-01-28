import { useParams } from "react-router-dom";
import { getMovies } from "./api/api";
import { Box, Container, Grid, Typography } from "@mui/material";

function MovieDetail() {
  const { id } = useParams();
  const item = getMovies(id);

  return <div>{item.titld}</div>;
}
export default MovieDetail;
