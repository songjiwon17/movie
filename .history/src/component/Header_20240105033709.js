import { Box, Button, Typography } from "@mui/material";
import {Grid} from '@mui/material';
import { useState } from "react";
import Link from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();

    return(
        <>
            <Grid container sx={{mb:10}}>
                <Grid item xs>
                    <Typography sx={{textAlign:'center'}} component="h1" variant="h2">MOVIE</Typography>
                </Grid>
                <Grid item>
                    <Button variant="outlined" >로그인</Button>
                </Grid>
            </Grid>
        </>
    )
}
export default Header;