import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import {Grid} from '@mui/material';
import { useState } from "react";
import Link from "@mui/material";

function Header(){
    const [open, setOpen] = useState(false);

    return(
        <Container>
            <Grid container style={{display: 'flex', alignItems:'center'}}>
                <Grid item xs>
                    <Typography style={{border: '1px solid #ccc', textAlign:'center'}} variant="h2">MOVIE</Typography>
                </Grid>
                <Grid item xs>
                    <Button variant="contained">로그인</Button>
                </Grid>
            </Grid>
            {/* <Dialog open={open}>
                <DialogTitle style={{color:'#000'}} onClick={()=>setOpen(true)}>로그인</DialogTitle>
                <DialogContent>
                    <DialogContentText>로그인 폼 만들기</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained">확인</Button>
                    <Button variant="outlined">취소</Button>
                </DialogActions>
            </Dialog> */}

        </Container>
    )
}
export default Header;