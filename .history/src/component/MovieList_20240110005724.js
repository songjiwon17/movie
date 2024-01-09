import MovieListItem from "./MovieListItem";
import {Box, Card, CardMedia, Stack, CardContent, Typography} from "@mui/material";

function MovieList({items}){
    return(
        <Stack sx={{bgcolor:'pink'}}>
            {items?.map((item)=>{
                return (
                    <Card key={item.id} >
                        <CardMedia 
                            component="img"
                            src={item.imgUrl}
                            alt={item.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        </CardContent>
                        {/* <MovieListItem item={item}/> */}
                    </Card>
                )})}
        </Stack>
    )
}
export default MovieList;