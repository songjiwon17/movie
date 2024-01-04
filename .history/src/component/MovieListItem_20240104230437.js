import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function MovieListItem({item}){

    function formatDate(value){
        const date = new Date(value);
        return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
    }

    return(
        <>
        <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        </Container>
        {/* <div className="MovieListItem">
            <img className="MovieListItem-img" src={item.imgUrl} alt={item.title}/>
            <div>
                <h1>{item.title}</h1>
                <p>{formatDate(item.createdAt)}</p>
            </div>
        </div> */}
        </>
    )
}
export default MovieListItem;