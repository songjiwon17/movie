import { getReviews } from '../api'
import {Link} from 'react-router-dom';
import Header from "./Header";
import SearchForm from './SearchForm';
import { useState, useEffect } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import items from '../mock.json';
import MovieList from './MovieList';
import { Container, Grid } from '@mui/material';

function Home(){
    const sortedItem = items.sort((a,b)=>b.rating - a.rating);

    return(
        <Container fixed>
            <Link to='/'><Header/></Link>
            <SearchForm/>
            <Grid container>
                <Grid item xs="18">
                    <MovieList items={sortedItem}/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Home;