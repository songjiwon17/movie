import MovieListItem from "./MovieListItem";
import {Box,Paper ,Card, CardMedia, Stack, CardContent, Typography} from "@mui/material";

function MovieList({items}){
    return(
        <Stack sx={{bgcolor:'pink'}}>
            {items?.map((item)=>{
                return (
                    <Box sx={{display: 'flex', flexDirection: 'row', bgcolor: 'red'}}>
                        <Paper elevation={4}>
                        <Card key={item.id} className="movie">
                        <CardMedia
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
                    </Paper>
                    </Box>
                    
                )})}
        </Stack>
    )
}
export default MovieList;