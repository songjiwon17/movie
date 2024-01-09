import MovieListItem from "./MovieListItem";
import {Container} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function MovieList({items}){
    return(
        <Container sx={{bgcolor: 'pink'}}>
            <ImageList sx={{ width: 500, height: 450 }}>

            </ImageList>
        </Container>
    )
}
export default MovieList;