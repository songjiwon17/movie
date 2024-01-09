import MovieListItem from "./MovieListItem";
import {Box, Card, CardMedia, Stack, CardContent, Typography} from "@mui/material";

function MovieList({items}){
    return(
        <Stack sx={{bgcolor:'pink', display: 'flex', justifyContent: 'space-between'}}>
            {items?.map((item)=>{
                return (
                    <Card key={item.id} raised sx={{margin: "10 auto"}}>
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
                )})}
        </Stack>
    )
}
export default MovieList;