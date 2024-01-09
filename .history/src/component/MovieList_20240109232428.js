import MovieListItem from "./MovieListItem";
import {Container} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function MovieList({items, onDelete}){
    return(
        <Container sx={{bgcolor: 'pink'}}>
            <ImageList sx={{ width: 500, height: 450 }}>
                    {items?.map((item)=>{
                        <ImageListItem key={item.img}>

                        </ImageListItem>
                    }
            </ImageList>
        </Container>
    )
}
export default MovieList;