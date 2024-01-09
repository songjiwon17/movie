import MovieListItem from "./MovieListItem";
import {Container} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function MovieList({items}){
    return(
        <Container sx={{bgcolor: 'pink'}}>
            <Stack direction="row" spacing={2} display='flex' justifyContent='center'>
                {items.map((item)=>{
                    <Item  sx={{ width: 300, height: 350, bgcolor:'green' }}>{item.title}</Item>
                })}
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