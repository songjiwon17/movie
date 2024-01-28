import { Grid, Box, Typography } from "@mui/material";
import MovieListItem from "./MovieListItem";

function MovieList({ items, onDelete }) {
  return (
    <Grid
      container
      p={6}
      spacing={{ xs: 2, md: 6 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ display: "flex" }}
    >
      {items?.map((item) => {
        return <MovieListItem item={item} onDelete={onDelete} />;
      })}
    </Grid>
  );
}
export default MovieList;
