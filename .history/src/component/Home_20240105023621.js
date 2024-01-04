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
    //const sortedItem = items.sort((a,b)=>b.rating - a.rating);

    return(
        <Container component='main' maxWidth='lg' sx={{backgroundColor:'pink'}}>
            <Box sx={{backgroundColor:'green'}}>
            <Grid container>
                    <Grid item>
                        <Typography style={{border: '1px solid #ccc', textAlign:'center'}} variant="h2">MOVIE</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained">로그인</Button>
                    </Grid>
                </Grid>
                <Link to='/'><Header/></Link>
                <SearchForm/>
                <MovieList /* items={sortedItem} *//>
            </Box>
        </Container>
    )
}
export default Home;