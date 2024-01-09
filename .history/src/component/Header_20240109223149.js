import { Button, Typography } from "@mui/material";
import {Grid} from '@mui/material';
import { useNavigate } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header(){
    const navigate = useNavigate();
    const navigateToLogin = ()=>{
        navigate('/login');
    }

    return(
        <>
            <Grid container sx={{mb:10, bgcolor: 'pink'}}>
                <Grid item xs>
                    <Typography sx={{textAlign:'center', fontWeight:'bold'}} component="h1" variant="h2">MOVIE</Typography>
                </Grid>
                <Grid item>
                    <Button><DarkModeIcon/></Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" onClick={navigateToLogin}>로그인</Button>
                </Grid>
            </Grid>
        </>
    )
}
export default Header;