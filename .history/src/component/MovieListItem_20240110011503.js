import {useState} from "react";
import styled from "@emotion/styled";
import {Typography} from "@mui/material";
import { Button } from '@mui/material';
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
        <MovieCard>
            <img className="MovieListItem-img" src={item?.imgUrl} alt={item?.title}/>
            <Typography>
                <h1>{item?.title}</h1>
                <p>{formatDate(item?.createdAt)}</p>
            </Typography>
            <FavoriteBorderIcon onClick = {()=>{setLike(like + 1)}}/>{like}
            <DeleteOutlineSharpIcon onClick={handleDeleteClick}/>
        </MovieCard>
    )
}

export default MovieListItem;
