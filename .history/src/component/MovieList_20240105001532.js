import MovieListItem from "./MovieListItem";

function MovieList({items}){
    return(
        <ul className="MovieList">
            {items.map((item)=>{
                return <li key={item.id}><MovieListItem item={item}/></li>
            })}
        </ul>
    )
}
export default MovieList;