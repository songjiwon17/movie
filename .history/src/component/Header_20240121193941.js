import { Button, Typography } from "@mui/material";
import {Grid} from '@mui/material';
import { useNavigate } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {Link} from 'react-router-dom';

function Header(){
    const navigate = useNavigate();
    
    const navigateToLogin = ()=>{
        navigate('/login');
    }

    return(
        <>
            <Grid container sx={{mb:10}}>
                <Grid item xs>
                    <Link to='/'><Typography sx={{textAlign:'center', fontWeight:'bold'}} component="h1" variant="h2">MOVIE</Typography></Link>
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