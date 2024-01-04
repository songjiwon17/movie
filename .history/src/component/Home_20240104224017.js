import { getReviews } from '../api'
import {Link} from 'react-router-dom';
import Header from "./Header";
import SearchForm from './SearchForm';
import { useState, useEffect } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import items from '../../mock.json';

function Home(){
    const sortedItem = items.sort((a,b)=>b.rating - a.rating);
    
    return(
        <div className="home">
            <Link to='/'><Header/></Link>
            <SearchForm/>
            
        </div>
    )
}
export default Home;