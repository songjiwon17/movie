import MovieListItem from "./MovieListItem";
import {Container} from "@mui/material";

function MovieList({items, onDelete}){
    return(
        <Container>
            <ul>
                {items?.map((item)=>{
                    return (
                        <li key={item.id}>
                            <MovieListItem item={item} onDelete={onDelete}/>
                        </li>
                    )})}
            </ul>
        </Container>
    )
}
export default MovieList;