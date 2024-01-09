import MovieListItem from "./MovieListItem";
import {Container} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function MovieList({items}){
    return(
        <Container sx={{bgcolor: 'pink'}}>
            <ImageList sx={{ width: 300, height: 350, bgcolor:'red' }}>
                {items?.map((item)=>{
                    <ImageListItem key={item.imgUrl}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                        />
                    </ImageListItem>
                })}
            </ImageList>
        </Container>
    )
}
export default MovieList;