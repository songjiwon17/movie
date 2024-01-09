import MovieListItem from "./MovieListItem";
import {Container, Stack} from "@mui/material";

function MovieList({items}){
    return(
        <Container>
            <Stack>
                {items?.map((item)=>{
                    return (
                        <li key={item.id}>
                            <MovieListItem item={item}/>
                        </li>
                    )})}
            </Stack>
            <MovieListItem/>
        </Container>
    )
}
export default MovieList;