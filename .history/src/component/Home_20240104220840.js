import { getReviews } from '../../api'
import {Link} from 'react-router-dom';
import Header from "./Header";
import SearchForm from './SearchForm';
import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';

function Home(){
    const [items, setItems] = useState([]);

    const handleLoadClick = async ()=>{
        const {reviews} = await getReviews();
        setItems({reviews})
    }
    return(
        <div className="home">
            <Link to='/'><Header/></Link>
            <SearchForm/>
            <Button variant="contained">불러오기</Button>
        </div>
    )
}
export default Home;