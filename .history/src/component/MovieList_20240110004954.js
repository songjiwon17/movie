import MovieListItem from "./MovieListItem";
import {Box, Card, Stack} from "@mui/material";

function MovieList({items}){
    return(
        <Stack sx={{bgcolor:'pink'}}>
            {items?.map((item)=>{
                return (
                    <Card key={item.id}>
                        <MovieListItem item={item}/>
                    </Card>
                )})}
        </Stack>
    )
}
export default MovieList;