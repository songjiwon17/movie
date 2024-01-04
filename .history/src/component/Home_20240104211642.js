import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Home(){
    return(
        <div>
            <h1>Home</h1>
            {/* <CssBaseline /> */}
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
            </Container>
        </div>
    )
}
export default Home;