import {Link} from 'react-dom';
import Header from "./Header";

function Home(){
    return(
        <div className="home">
            <Link><h1>Home</h1></Link>
            <Header/>
        </div>
    )
}
export default Home;