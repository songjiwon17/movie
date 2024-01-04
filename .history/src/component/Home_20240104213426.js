import {Link} from 'react-router-dom';
import Header from "./Header";

function Home(){
    return(
        <div className="home">
            <Link to='/'><h1>Home</h1></Link>
            <Header/>
        </div>
    )
}
export default Home;