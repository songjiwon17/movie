import { useLocation, useParams } from "react-router-dom";
import { getMovies } from "./api";
import { Box, Container, Grid, Typography } from "@mui/material";

function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();
  return (
    <Container>
      <Grid
        key={item.id}
        elevation={6}
        sx={{ margin: "0.5rem", border: "1px solid #ededed" }}
      >
        <Grid sx={{ textAlign: "center" }}>
          <Box
            sx={{ width: 250, height: 350 }}
            component="img"
            src={item.imgUrl}
            alt={item.title}
          />
          <Typography variant="h6" sx={{ color: "#fff", p: 2 }}>
            {item.title}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
export default MovieDetail;
