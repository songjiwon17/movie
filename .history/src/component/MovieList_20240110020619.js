import MovieListItem from "./MovieListItem";
import {Paper ,Card, CardMedia, Stack, CardContent, Typography} from "@mui/material";

function MovieList({items}){
    return(
        <Stack sx={{bgcolor:'pink'}}>
            {items?.map((item)=>{
                return (
                    <Paper elevation={3}>
                    <Card key={item.id}>
                        {/* <CardMedia
                            component="img"
                            src={item.imgUrl}
                            alt={item.title}
                        /> */}
                        <Typography variant="h5" sx={{color: '#333'}}>{item.title}</Typography>
                        <Typography variant="h6" sx={{color: '#333'}}>{item.contents}</Typography>
                 
                        {/* <MovieListItem item={item}/> */}
                    </Card>
                </Paper>   
                )})}
        </Stack>
    )
}
export default MovieList;