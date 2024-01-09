import MovieListItem from "./MovieListItem";
import {Container} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function MovieList({items}){
    return(
        <Container sx={{bgcolor: 'pink'}}>
            <Stack direction="row" spacing={2}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
            {/* <ImageList sx={{ width: 300, height: 350, bgcolor:'green' }}>
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