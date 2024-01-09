import MovieListItem from "./MovieListItem";
import {Container} from "@mui/material";
import ImageList from '@mui/material/ImageList';

function MovieList({items, onDelete}){
    return(
        <Container sx={{bgcolor: 'pink'}}>
            <ImageList sx={{ width: 500, height: 450 }}>
                {items?.map((item)=>{
                        return (
                            <li key={item.id}>
                                <MovieListItem item={item} onDelete={onDelete}/>
                            </li>
                        )})}
            </ImageList>
        </Container>
    )
}
export default MovieList;