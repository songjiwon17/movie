import Header from "./Header";
import SearchForm from './SearchForm';
import * as React from 'react';
import items from '../mock.json';
import MovieList from './MovieList';
import { Container, Box } from '@mui/material';
import {Suspense} from "react";

function Home(){
    const sortedItem = items.sort((a,b)=>b.rating - a.rating);
    const MovieList = React.lazy(()=>import('./MovieList'));
    return(
        <Container component='main' maxWidth='lg' sx={{mt:10, padding:10}}>
            <Box>
            <Header/>
            <SearchForm/>
                <Suspense fallback={<div>로딩중...</div>}>
                    <MovieList items={sortedItem}/>
                </Suspense>
            </Box>
        </Container>
    )
}
export default Home;