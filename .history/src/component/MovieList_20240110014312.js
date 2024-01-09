import MovieListItem from "./MovieListItem";
import {Container, Box, Card, CardMedia, Stack, CardContent, Typography} from "@mui/material";

function MovieList({items}){
    return(
        <Stack sx={{bgcolor:'pink'}}>
            {items?.map((item)=>{
                return (
                    <Cotnainer>
                        <Card key={item.id} className="movie">
                        <CardMedia  className="image"
                            component="img"
                            src={item.imgUrl}
                            alt={item.title}
                        />
                        <CardContent >
                            <Typography variant="h5" sx={{color: '#333', textAlign: 'center'}}>
                                {item.title}
                            </Typography>
                        </CardContent>
                        {/* <MovieListItem item={item}/> */}
                    </Card>
                    </Cotnainer>
                )})}
        </Stack>
    )
}
export default MovieList;