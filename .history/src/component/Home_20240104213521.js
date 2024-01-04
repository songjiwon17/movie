import {Link} from 'react-router-dom';
import Header from "./Header";

function Home(){
    return(
        <div className="home">
            <Link to='/'><Header/></Link>
        </div>
    )
}
export default Home;