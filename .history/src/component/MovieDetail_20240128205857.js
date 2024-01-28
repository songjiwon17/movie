import { useParams } from "react-router-dom";
import { getMovies } from "./api";
import { Box, Container, Grid, Typography } from "@mui/material";

function MovieDetail({ items }) {
  const { id } = useParams();
  const item = getMovies(id);

  return (
    <Container>
      <Grid
        key={items.id}
        elevation={6}
        sx={{ margin: "0.5rem", border: "1px solid #ededed" }}
      >
        <Grid sx={{ textAlign: "center" }}>
          <Box
            sx={{ width: 250, height: 350 }}
            component="img"
            src={items.imgUrl}
            alt={items.title}
          />
          <Typography variant="h6" sx={{ color: "#fff", p: 2 }}>
            {items.title}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
export default MovieDetail;
