import {Container} from "@mui/material";
import {Button} from "@mui/material";
import MovieListItem from "./MovieListItem";

function MovieList({items}){
    return(
        <Container sx={{bgcolor:'yellow'}}>
            <Button>container 안 확인해보기</Button>
            <ul>
                {items?.map((item)=>{
                    return (
                        <li key={item.id}>
                            <MovieListItem item={item}/>
                        </li>
                    )})}
            </ul>
            <MovieListItem/>
        </Container>
    )
}
export default MovieList;