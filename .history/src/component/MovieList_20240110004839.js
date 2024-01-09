import MovieListItem from "./MovieListItem";
import {Stack} from "@mui/material";

function MovieList({items}){
    return(
        <Stack sx={{bgcolor:'pink'}}>
            {items?.map((item)=>{
                return (
                    <Box key={item.id}>
                        <MovieListItem item={item}/>
                    </Box>
                )})}
        </Stack>
    )
}
export default MovieList;