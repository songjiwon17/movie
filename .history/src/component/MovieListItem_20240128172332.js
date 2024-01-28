import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
`;

function MovieListItem({ item, onDelete }) {
  const [like, setLike] = useState(0);
  const handleDeleteClick = () => onDelete(item.id);

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
          <Link to={`/movie/${item.id}`}></Link>
          {item.title}
        </Typography>
        <FavoriteBorderIcon
          onClick={() => {
            setLike(like + 1);
          }}
        />
        {like}
        <DeleteOutlineSharpIcon onClick={handleDeleteClick} />
      </Grid>
    </Grid>
  );
}

export default MovieListItem;
