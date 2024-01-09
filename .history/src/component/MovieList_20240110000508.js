import MovieListItem from "./MovieListItem";
import {Container} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function MovieList({items}){
    return(
        <Container sx={{bgcolor: 'pink'}}>
            <ImageList sx={{ width: 300, height: 350, bgcolor:'red' }}>
                {items?.map((item)=>{
                    <ImageListItem key={item.id}>
                        <img
                            srcSet={`${item.imgUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={"https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/react-02/film-reviews/5f2ad6df-2660-4b41-ad8b-df218a404346.jpg"}
                            alt={item.title}
                            loading="lazy"
                        />
                    <ImageListItemBar
                        title={item.title}
                        position="below"
                    />
                    </ImageListItem>
                })}
            </ImageList>
        </Container>
    )
}
export default MovieList;