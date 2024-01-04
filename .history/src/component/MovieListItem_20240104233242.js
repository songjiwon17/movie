import * as React from 'react';
import { Container, Typography } from '@mui/material';


function MovieListItem({item}){

    function formatDate(value){
        const date = new Date(value);
        return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
    }

    return(
        <>
            <Container sx={{backgroundColor: 'green'}}>
                <img className="MovieListItem-img" src={item.imgUrl} alt={item.title}/>
                <div>
                    <Typography variant='h3'>{item.title}</Typography>
                    <p>{formatDate(item.createdAt)}</p>
                </div>
            </Container>
        </>
    )
}
export default MovieListItem;