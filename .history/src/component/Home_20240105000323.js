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
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    
                </Grid>
            </Grid>
        </Container>
    )
}
export default Home;