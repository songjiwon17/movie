import {useState} from "react";
import styled from "@emotion/styled";
import {Box, Grid, Typography} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';

const MovieCard = styled.div`
    
`;

function MovieListItem({item, onDelete}){
    const [like, setLike ] = useState(0);

    function formatDate(value){
        const date = new Date(value);
        return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
    }

    const handleDeleteClick = ()=> onDelete(item.id);

    return(
        <Grid key={item.id} elevation={6} sx={{margin:'0.5rem' ,border:'1px solid #ededed'}}>
            <Grid sx={{textAlign:'center'}}>
                <Box
                    sx={{width: 250, height: 350}}
                    component="img"
                    src={item.imgUrl}
                    alt={item.title}
                />
                <Typography variant="h6" sx={{color: '#fff', p:2}}>{item.title}</Typography>
                <FavoriteBorderIcon onClick = {()=>{setLike(like + 1)}}/>{like}
                <DeleteOutlineSharpIcon onClick={handleDeleteClick}/>
            </Grid>
        </Grid>
    )
}

export default MovieListItem;
