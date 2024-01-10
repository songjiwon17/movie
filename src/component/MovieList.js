import MovieListItem from "./MovieListItem";
import {Grid,Box,Paper ,Card, CardMedia, Stack, CardContent, Typography} from "@mui/material";
import styles from '../App.css';

function MovieList({items}){
    return(
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{display:'flex',justifyContent:'space-between', alignItems:'center',bgcolor:'pink'}}>
            {items?.map((item)=>{
                return (
                    <Grid key={item.id} elevation={6} sx={{border:'1px solid #fff'}}>
                        <Grid sx={{textAlign:'center'}}>
                            <Box
                                sx={{width: 250, height: 350}}
                                component="img"
                                src={item.imgUrl}
                                alt={item.title}
                            />
                            <Typography variant="h6" sx={{color: '#fff', p:2}}>{item.title}</Typography>
                        </Grid>
                    </Grid>
                    )})}
        </Grid>
    )
}
export default MovieList;