import MovieListItem from "./MovieListItem";
import {Container} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function MovieList({items, onDelete}){
    return(
        <Container sx={{bgcolor: 'pink'}}>
            <ImageList sx={{ width: 500, height: 450 }}>
                <ImageListItem key={item.img}>
                    {items?.map((item)=>{
                            return (
                                <li key={item.id}>
                                    <MovieListItem item={item} onDelete={onDelete}/>
                                </li>
                            )})}
                </ImageListItem>
            </ImageList>
        </Container>
    )
}
export default MovieList;