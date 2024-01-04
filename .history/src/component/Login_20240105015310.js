import { Button, Checkbox, Container, FormControlLabel, Link, TextField, Grid } from "@mui/material";

function Login(){
    return(
        <Container fixed style={{display:'flex', flexDirection:'column'}}>
            <TextField label='Email Address' required fullWidth name="email" autoComplete="email" autoFocus/>
            <TextField label='Password' type="password" required fullWidth name="password" autoComplete="current-password"/>
            <FormControlLabel control={<Checkbox value='remember' color="primary"/>} label="로그인 정보 기억하기"/>
            <Button type="submit" variant="contained" fullWidth sx={{mt:3}} >로그인</Button>
            <Grid container>
                <Grid item xs>
                    <Link>회원가입하기</Link>   
                </Grid>
                <Grid item>
                    <Link>회원가입하기</Link>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Login;