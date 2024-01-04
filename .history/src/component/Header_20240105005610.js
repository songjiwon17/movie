import { Button, Typography } from "@mui/material";
import {Grid} from '@mui/material';

function Header(){
    return(
        <Grid container>
            <Grid item xs='10'>
                <Typography variant="h2">MOVIE</Typography>
            </Grid>
            <Grid item xs='2'>
                <Button>로그인</Button>
            </Grid>
        </Grid>
    )
}
export default Header;