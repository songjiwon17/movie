import MovieListItem from "./MovieListItem";
import {Box, Card, CardMedia, Stack} from "@mui/material";

function MovieList({items}){
    return(
        <Stack sx={{bgcolor:'pink'}}>
            {items?.map((item)=>{
                return (
                    <Card key={item.id}>
                        <CardMedia 
                            component="img"
                            src={item.imgUrl}
                            alt={item.title}
                            width='350'
                        />
                        {/* <MovieListItem item={item}/> */}
                    </Card>
                )})}
        </Stack>
    )
}
export default MovieList;