import Header from "./Header";
import SearchForm from './SearchForm';
import * as React from 'react';
import { Container, Button, Box } from '@mui/material';
import { Suspense, useEffect, useState } from "react";
import { getMovies } from "../api";
/* import styled, { ThemeProvider } from 'styled-components'; */

const LIMIT  = 10;

function Home(){
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState('createdAt');
    const [offset, setOffset] = useState(0);
    const [hasNext, setHasNext] = useState(false);
    const sortedItems = items.sort((a,b)=>b[order] - a[order]);

    // 베스트순
    const handleBestClick = ()=> setOrder('rating');

    const handleLoad = async (options) => {
        const { reviews, paging } = await getMovies(options);
        if(options.offset === 0){
            setItems(reviews);
        }else{
            setItems([...items, ...reviews]);
        }
        setOffset(options.offset + reviews.length);
        setHasNext(paging.hasNext);
    }
    const handleLoadMore = ()=>{
        handleLoad({order, offset, limit:LIMIT})
    }

    // 삭제
    const handleDelete = (id) =>{
        const nextItems = items.filter((item)=>item.id !== id);
        setItems(nextItems);
    }

    useEffect(() => {
        handleLoad({order, offset:0, limit: LIMIT});
    }, [order])

    const MovieList = React.lazy(()=>import('./MovieList'));

    return(
        <Container fixed sx={{mt:10, padding:10}}>
            <Header/>
            {/* <SearchForm/> */}
            <Box>
                <Button variant="contained" onClick={handleBestClick}>베스트순</Button>
                <Suspense fallback={<div>로딩중...</div>}>
                    <MovieList items={sortedItems} onDelete={handleDelete}/>
                    {hasNext && <Button variant="contained" onClick={handleLoadMore}>더보기</Button>}
                </Suspense>
            </Box>
        </Container>
    )
}
export default Home;