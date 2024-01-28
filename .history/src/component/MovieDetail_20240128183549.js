import { Link, useParams } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";

function MovieDetail({ item }) {
  const { id } = useParams();
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
            <Link to={`/movie/${item.id}`}>{item.title}</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
export default MovieDetail;
