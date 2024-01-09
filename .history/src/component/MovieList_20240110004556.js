import MovieListItem from "./MovieListItem";
import {Stack} from "@mui/material";

function MovieList({items}){
    return(
        <Stack sx={{bgcolor:'pink'}}>
            {items?.map((item)=>{
                return (
                    <Item key={item.id}>
                        <MovieListItem item={item}/>
                    </Item>
                )})}
        </Stack>
    )
}
export default MovieList;