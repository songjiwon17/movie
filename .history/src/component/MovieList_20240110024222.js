import MovieListItem from "./MovieListItem";
import {Box,Paper ,Card, CardMedia, Stack, CardContent, Typography} from "@mui/material";

function MovieList({items}){
    return(
        <Box sx={{display: 'flex', flexDirection: {md: 'row', xs: 'column'},pt: 10, gap: 2}}>
            {items?.map((item)=>{
                return (
                    <Box>
                        <Paper elevation={2}>
                        <Box key={item.id}>
                            <Box
                                sx={{width: 250, height: 350}}
                                component="img"
                                src={item.imgUrl}
                                alt={item.title}
                            />
                            <Typography variant="h6" sx={{color: '#333', p:2}}>{item.title}</Typography>
                        </Box>
                    </Paper> 
                    </Box>
                    
                    )})}
        </Box>
    )
}
export default MovieList;