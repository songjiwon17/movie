import Header from "./Header";
import SearchForm from './SearchForm';
import * as React from 'react';
import MovieList from './MovieList';
import { Container, Box, Button } from '@mui/material';
import { Suspense, useEffect, useState, useNavigate } from "react";
import {getMovies} from "../api";

function Home(){
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState('createdAt');
    const sortedItems = items.sort((a,b)=>b[order] - a[order]);

    const navigate = useNavigate();
    const navigateToLogin = ()=>{
        navigate('/login');
    }

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
        <Container component='main' maxWidth='lg' sx={{mt:10, padding:10}}>
            <Button variant="outlined" onClick={navigateToLogin}>로그인</Button>
            <Header/>
            <SearchForm/>
                <Button onClick={handleBestClick}>베스트순</Button>
                <Suspense fallback={<div>로딩중...</div>}>
                    <MovieList items={sortedItems} onDelete={handleDelete}/>
                </Suspense>
        </Container>
    )
}
export default Home;