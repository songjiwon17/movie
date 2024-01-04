import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import {Grid} from '@mui/material';
import { useState } from "react";
import Link from "@mui/material";

function Header(){
    const [open, setOpen] = useState(false);

    return(
        <Container>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                <Grid container>
                    <Grid item>
                        <Typography style={{border: '1px solid #ccc', textAlign:'center'}} variant="h2">MOVIE</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={()=>setOpen(true)}>로그인</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default Header;