import MovieListItem from "./MovieListItem";
import {Box,Paper ,Card, CardMedia, Stack, CardContent, Typography} from "@mui/material";

function MovieList({items}){
    return(
        <Box sx={{display: 'flex', flexDirection: {xs:'column', sm: 'row'}, gap: 2}}>
            {items?.map((item)=>{
                return (
                    <Paper elevation={4}>
                        <Card key={item.id}>
                            <CardMedia
                                component="img"
                                src={item.imgUrl}
                                alt={item.title}
                            />
                            <Typography variant="h6" sx={{color: '#333', p:2}}>{item.title}</Typography>
                            {/* <MovieListItem item={item}/> */}
                        </Card>
                    </Paper> 
                    )})}
        </Box>
    )
}
export default MovieList;