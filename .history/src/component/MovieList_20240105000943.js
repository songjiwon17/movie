import MovieListItem from "./MovieListItem";

function MovieList({items}){
    return(
        <Grid>
            {items.map((item)=>{
                return <li><MovieListItem item={item}/></li>
            })}
        </Grid>
    )
}
export default MovieList;