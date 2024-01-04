import {Link} from 'react-router-dom';
import Header from "./Header";
import SearchForm from './SearchForm';

function Home(){
    return(
        <div className="home">
            <Link to='/'><Header/></Link>
            <SearchForm/>
        </div>
    )
}
export default Home;