import { getReviews } from '../api'
import {Link} from 'react-router-dom';
import Header from "./Header";
import SearchForm from './SearchForm';
import { useState, useEffect } from 'react';
import * as React from 'react';
import items from '../mock.json';
import MovieList from './MovieList';
import { Container, Box, Grid } from '@mui/material';

function Home(){
    //const sortedItem = items.sort((a,b)=>b.rating - a.rating);

    return(
        <Container fixed>
            <Box>
                <Grid container>
                    <Grid item>
                        <Link to='/'><Header/></Link>
                    </Grid>
                </Grid>
                <Grid item>
                    <SearchForm/>
                </Grid>
                <MovieList /* items={sortedItem} *//>
            </Box>
        </Container>
    )
}
export default Home;