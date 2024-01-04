import {Link} from 'react-router-dom';
import Header from "./Header";
import SearchForm from './SearchForm';
import { useState } from 'react';

function Home(){
    const [items, setItems] = useState([]);

    const handleLoadClick = async ()=>{
        const {reviews} = await getReviews();
    }
    return(
        <div className="home">
            <Link to='/'><Header/></Link>
            <SearchForm/>
        </div>
    )
}
export default Home;