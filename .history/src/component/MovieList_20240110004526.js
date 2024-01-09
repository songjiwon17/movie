import MovieListItem from "./MovieListItem";
import {Stack} from "@mui/material";

function MovieList({items}){
    return(
        <Stack>
            {items?.map((item)=>{
                return (
                    <li key={item.id}>
                        <MovieListItem item={item}/>
                    </li>
                )})}
        </Stack>
    )
}
export default MovieList;