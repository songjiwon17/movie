import * as React from 'react';
import { Container } from '@mui/material';


function MovieListItem({item}){

    function formatDate(value){
        const date = new Date(value);
        return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
    }

    return(
        <>
            <Container sx={{backgroundColor: 'green'}} maxWidth='md'>
                <img className="MovieListItem-img" src={item.imgUrl} alt={item.title}/>
                <div>
                    <h1>{item.title}</h1>
                    <p>{formatDate(item.createdAt)}</p>
                </div>
            </Container>
        </>
    )
}
export default MovieListItem;