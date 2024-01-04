import MovieListItem from "./MovieListItem";

function MovieList({items}){
    return(
        <ul>
            {items.map(()=>{
                return <li><MovieListItem /></li>
            })}
        </ul>
    )
}
export default MovieList;