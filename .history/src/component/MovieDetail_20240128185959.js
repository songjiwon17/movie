import { useParams } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";

function MovieDetail({ item }) {
  const { id } = useParams();
  return (
    console.log(id);
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
    //         src={item[id].imgUrl}
    //         alt={item[id].title}
    //       />
    //       <Typography variant="h6" sx={{ color: "#fff", p: 2 }}>
    //         {item[id].title}
    //       </Typography>
    //     </Grid>
    //   </Grid>
    // </Container>
  );
}
export default MovieDetail;
