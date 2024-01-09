import Header from "./Header";
import SearchForm from './SearchForm';
import * as React from 'react';
import MovieList from './MovieList';
import { Container, Button } from '@mui/material';
import { Suspense, useEffect, useState } from "react";
import {getMovies} from "../api";

function Home(){
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState('createdAt');
    const sortedItems = items.sort((a,b)=>b[order] - a[order]);

    const handleLoad = async () => {
        const { reviews } = await getMovies();
        setItems(reviews)
    }

    // 베스트순
    const handleBestClick = ()=> setOrder('rating');

    // 삭제
    const handleDelete = (id) =>{
        const nextItems = items.filter((item)=>item.id !== id);
        setItems(nextItems);
    }

    useEffect(() => {
        handleLoad({order});
    }, [order])

    const MovieList = React.lazy(()=>import('./MovieList'));

    return(
        <Container fixed sx={{mt:10, padding:10}}>
            <Header/>            
            <SearchForm/>
                <Button onClick={handleBestClick}>베스트순</Button>
                <Suspense fallback={<div>로딩중...</div>}>
                    <MovieList items={sortedItems}/>
                </Suspense>
        </Container>
    )
}
export default Home;