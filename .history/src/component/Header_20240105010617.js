import { Button, Container, Typography } from "@mui/material";
import {Grid} from '@mui/material';

function Header(){
    return(
        <Container>
            <Grid container style={{display: 'flex', alignItems:'center'}}>
            <Grid item xs='10'>
                <Typography style={{border: '1px solid #ccc', textAlign:'center'}} variant="h2">MOVIE</Typography>
            </Grid>
            <Grid item xs='2'>
                <Button variant="contained" >로그인</Button>
            </Grid>
            </Grid>
        </Container>
    )
}
export default Header;