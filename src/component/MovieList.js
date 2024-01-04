import MovieListItem from "./MovieListItem";

function MovieList({items}){
    return(
        <ul className="MovieList">
            {/* {items && items.map((item)=>{
                return <li><MovieListItem item={item}/></li>
            })} */}
        </ul>
    )
}
export default MovieList;