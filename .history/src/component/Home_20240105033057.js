import { getReviews } from '../api'
import {Link} from 'react-router-dom';
import Header from "./Header";
import SearchForm from './SearchForm';
import { useState, useEffect } from 'react';
import * as React from 'react';
import items from '../mock.json';
import MovieList from './MovieList';
import { Container, Box, Grid, Button, Typography } from '@mui/material';

function Home(){
    const sortedItem = items.sort((a,b)=>b.rating - a.rating);
    const [open, setOpen] = useState();

    return(
        <Container component='main' maxWidth='lg' sx={{mt:10, padding:10}}>
            <Box>
            <Header open={open}/>
            <SearchForm/>
            <MovieList items={sortedItem}/>
            </Box>
        </Container>
    )
}
export default Home;