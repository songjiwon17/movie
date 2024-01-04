import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import {Grid} from '@mui/material';
import { useState } from "react";
import Link from "@mui/material";

function Header(){
    const [open, setOpen] = useState(false);

    return(
        <>
            <Grid container sx={{mb:10}}>
                <Grid item xs>
                    <Typography sx={{textAlign:'center'}} component="h1" variant="h2">MOVIE</Typography>
                </Grid>
                <Grid item>
                    <Button variant="outlined" onClick={()=>setOpen(true)}>로그인</Button>
                </Grid>
            </Grid>
            <Dialog open={open}>
                <DialogTitle>로그인</DialogTitle>
                <DialogContent>
                    <DialogContentText>로그인 성공!</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={()=>setOpen(false)}>확인</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default Header;