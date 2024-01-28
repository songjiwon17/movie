import { useParams } from "react-router-dom";
import { uswEffecct } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

function MovieDetail({ item }) {
  const { id } = useParams();
  console.log(id);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <h1>Detail</h1>
    // <Container>
    //   <Grid
    //     key={item.id}
    //     elevation={6}
    //     sx={{ margin: "0.5rem", border: "1px solid #ededed" }}
    //   >
    //     <Grid sx={{ textAlign: "center" }}>
    //       <Box
    //         sx={{ width: 250, height: 350 }}
    //         component="img"
    //         src={item.imgUrl}
    //         alt={item.title}
    //       />
    //       <Typography variant="h6" sx={{ color: "#fff", p: 2 }}>
    //         {item.title}
    //       </Typography>
    //     </Grid>
    //   </Grid>
    // </Container>
  );
}
export default MovieDetail;
