import {Button} from "@mui/material";
import MovieListItem from "./MovieListItem";
import {Container} from "@mui/material";

function MovieList({items}){
    return(
        <Container>
            <ul>
                {items?.map((item)=>{
                    return (
                        <li key={item.id}>
                            <MovieListItem item={item}/>
                        </li>
                    )})}
            </ul>
            <MovieListItem/>
        </Container>
    )
}
export default MovieList;