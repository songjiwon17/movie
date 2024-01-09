import MovieListItem from "./MovieListItem";
import {Box, Card, CardMedia, Stack, CardContent, Typography} from "@mui/material";

function MovieList({items}){
    return(
        <Stack sx={{bgcolor:'pink'}}>
            {items?.map((item)=>{
                return (
                    <Card key={item.id} sx={{bgcolor: 'pink'}}>
                        <CardMedia 
                            sx={{width: '300', height: '300', overflow: 'hidden'}}
                            component="img"
                            src={item.imgUrl}
                            alt={item.title}
                        />
                        <CardContent >
                            <Typography variant="h5" component="div" sx={{color: '#333', textAlign: 'center'}}>
                                {item.title}
                            </Typography>
                        </CardContent>
                        {/* <MovieListItem item={item}/> */}
                    </Card>
                )})}
        </Stack>
    )
}
export default MovieList;