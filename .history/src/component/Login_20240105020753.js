import { Button, Checkbox, Box, FormControlLabel, Link, TextField, Grid, Typography, Container } from "@mui/material";

function Login(){
    return(
        <Container component='main' maxWidth='xs'>
            <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                <Typography component="h1" variant="h5">로그인</Typography>
                <TextField margin="normal" label='Email Address' required fullWidth name="email" autoComplete="email" autoFocus/>
                <TextField label='Password' type="password" required fullWidth name="password" autoComplete="current-password"/>
                <FormControlLabel control={<Checkbox value='remember' color="primary"/>} label="로그인 정보 기억하기"/>
                <Button type="submit" variant="contained" fullWidth sx={{mt:1, mb:2}} >로그인</Button>
                <Grid container>
                    <Grid item xs>
                        <Link>회원가입하기</Link>   
                    </Grid>
                    <Grid item>
                        <Link>회원가입하기</Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default Login;