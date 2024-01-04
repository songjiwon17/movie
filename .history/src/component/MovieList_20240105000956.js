import MovieListItem from "./MovieListItem";
import { Grid } from "@mui/material";

function MovieList({items}){
    return(
        <Grid>
            {items.map((item)=>{
                return <li><MovieListItem item={item}/></li>
            })}
        </Grid>
    )
}
export default MovieList;