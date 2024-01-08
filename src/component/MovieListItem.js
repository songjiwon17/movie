import styled from "@emotion/styled";
import {Typography} from "@mui/material";
import Card from "@mui/material/Card";

const MovieCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function MovieListItem({item}){

    function formatDate(value){
        const date = new Date(value);
        return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
    }

    return(
        <MovieCard>
            <img className="MovieListItem-img" src={item?.imgUrl} alt={item?.title}/>
            <Typography sx={{bgcolor: 'pink'}} gutterBottom variant="h5" component="div">
                <h1>{item?.title}</h1>
                <p>{formatDate(item?.createdAt)}</p>
            </Typography>
        </MovieCard>
    )
}

export default MovieListItem;