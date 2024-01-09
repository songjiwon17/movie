import MovieListItem from "./MovieListItem";
import {Container} from "@mui/material";

function MovieList({items, onDelete}){
    return(
        <Container>
            <ImageList>
                <ul>
                {items?.map((item)=>{
                        return (
                            <li key={item.id}>
                                <MovieListItem item={item} onDelete={onDelete}/>
                            </li>
                        )})}
                </ul>
            </ImageList>
        </Container>

            {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
            <ImageListItem key={item.img}>
                <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                />
            </ImageListItem>
            ))}
            </ImageList> */}
    )
}
export default MovieList;