import { Button, Checkbox, Box, FormControlLabel, Link, TextField, Grid, Typography, Container } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useState} from 'react';

function Login(){
    const [open, setOpen] = useState(false);

    return(
        <Container component='main' maxWidth='xs' sx={{padding:10 ,backgroundColor:'#ededed'}}>
            <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                <Typography sx={{color:'#999'}} component="h1" variant="h5">로그인</Typography>
                <TextField  margin="normal" label='Email Address' required fullWidth name="email" autoComplete="email" autoFocus/>
                <TextField label='Password' type="password" required fullWidth name="password" autoComplete="current-password"/>
                <FormControlLabel control={<Checkbox value='remember' color="primary"/>} label="로그인 정보 기억하기"/>
                <Button type="submit" variant="contained" fullWidth sx={{mt:1, mb:2}} onClick={()=>setOpen(true)}>로그인</Button>
                <Grid container>
                    <Grid item xs>
                        <Link style={{cursor: 'pointer'}}>회원가입하기</Link>   
                    </Grid>
                    <Grid item>
                        <Link style={{cursor: 'pointer'}}>회원가입하기</Link>
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
            </Box>
        </Container>
    )
}
export default Login;