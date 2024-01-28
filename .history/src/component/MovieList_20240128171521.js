import { Grid, Box, Typography } from "@mui/material";
import MovieListItem from "./MovieListItem";
import * as React from "react";
import { Container, Button, Box } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import { getMovies } from "../api";

const LIMIT = 10;

function MovieList({ items, onDelete }) {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  // 베스트순
  const handleBestClick = () => setOrder("rating");

  const handleLoad = async (options) => {
    const { reviews, paging } = await getMovies(options);
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems([...items, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  };
  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  // 삭제
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  const MovieList = React.lazy(() => import("./MovieList"));
  return (
    <Container>
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
    </Container>
  );
}
export default MovieList;
