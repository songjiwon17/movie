import { getReviews } from '../api'
import {Link} from 'react-router-dom';
import Header from "./Header";
import SearchForm from './SearchForm';
import { useState, useEffect } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';

function Home(){
    const [items, setItems] = useState([]);

    const handleLoad = async ()=>{
        const {reviews} = await getReviews();
        setItems({reviews})
    }
    useEffect(()=>{
        handleLoad()
    },[])
    return(
        <div className="home">
            <Link to='/'><Header/></Link>
            <SearchForm/>
            
        </div>
    )
}
export default Home;