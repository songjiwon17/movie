import MovieListItem from "./MovieListItem";
import {Box,Paper ,Card, CardMedia, Stack, CardContent, Typography} from "@mui/material";

function MovieList({items}){
    return(
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                {items?.map((item)=>{
                    return (
                        <Paper elevation={4}>
                        <Card key={item.id}>
                            <CardMedia
                                component="img"
                                src={item.imgUrl}
                                alt={item.title}
                            />
                            <Typography variant="h5" sx={{color: '#333'}}>{item.title}</Typography>
                            <Typography variant="h6" sx={{color: '#666'}}>{item.content}</Typography>
                    
                            {/* <MovieListItem item={item}/> */}
                        </Card>
                    </Paper>   
                    )})}
            </Box>
     
    )
}
export default MovieList;