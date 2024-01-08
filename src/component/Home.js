import Header from "./Header";
import SearchForm from './SearchForm';
import * as React from 'react';
import items from '../mock.json';
import MovieList from './MovieList';
import { Container, Box, Button } from '@mui/material';
import {Suspense, useEffect, useState} from "react";
import {getMovies} from "../api";

function Home(){
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState('createdAt');
    const sortedItems = items.sort((a,b)=>b[order] - a[order]);

    const handleLoad = async () => {
        const { reviews } = await getMovies();
        setItems(reviews);
    }
    useEffect(() => {
        handleLoad(order);
    }, [order])

    const MovieList = React.lazy(()=>import('./MovieList'));

    return(
        <Container component='main' maxWidth='lg' sx={{mt:10, padding:10}}>
            <Box>
            <Header/>
            <SearchForm/>
                <Button>불러오기</Button>
                <Suspense fallback={<div>로딩중...</div>}>
                    <MovieList items={sortedItems}/>
                </Suspense>
            </Box>
        </Container>
    )
}
export default Home;