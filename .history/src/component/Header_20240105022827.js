import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import {Grid} from '@mui/material';
import { useState } from "react";
import Link from "@mui/material";

function Header(){
    const [open, setOpen] = useState(false);

    return(
        <Container>
            <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                <Grid container>
                    <Grid item>
                        <Typography style={{border: '1px solid #ccc', textAlign:'center'}} variant="h2">MOVIE</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained">로그인</Button>
                    </Grid>
                </Grid>
            </Box>
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