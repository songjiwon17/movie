import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";

function MovieDetail({ item }) {
  let { id } = useParams();

  return (
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
  );
}
export default MovieDetail;
