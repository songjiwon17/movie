import MovieListItem from "./MovieListItem";
import {Container} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { CardMedia } from '@mui/material';

function MovieList({items}){
    return(
        <Container sx={{bgcolor: 'pink'}}>
            {items.map((item)=>{
                <CardMedia>
                    
                </CardMedia>
            })}
            {/* <ImageList sx={{ width: 300, height: 350, bgcolor:'red' }}>
                {items?.map((item)=>{
                    <ImageListItem key={item.imgUrl}>
                    <ImageListItemBar
                        title={item.title}
                        position="below"
                    />
                    </ImageListItem>
                })}
            </ImageList> */}
        </Container>
    )
}
export default MovieList;