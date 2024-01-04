import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Container';

function MovieListItem({item}){

    function formatDate(value){
        const date = new Date(value);
        return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
    }

    return(
        <>
        <Grid item xs={6} sm={3}>
          <Box bgcolor="error.main" color="info.contrastText" p={2}>
            <div className="MovieListItem">
                <img className="MovieListItem-img" src={item.imgUrl} alt={item.title}/>
                <div>
                    <h1>{item.title}</h1>
                    <p>{formatDate(item.createdAt)}</p>
                </div>
            </div>
          </Box>
        </Grid>
        </>
    )
}
export default MovieListItem;