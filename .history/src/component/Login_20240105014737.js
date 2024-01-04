import { Button, Checkbox, Container, FormControlLabel, TextField } from "@mui/material";

function Login(){
    return(
        <Container fixed style={{display:'flex', flexDirection:'column'}}>
            <TextField label='Email Address' required fullWidth name="email" autoComplete="email" autoFocus/>
            <TextField label='Password' type="password" required fullWidth name="password" autoComplete="current-password"/>
            <FormControlLabel control={<Checkbox value='remember' color="primary"/>} label="로그인 정보 기억하기"/>
            <Button type="submit" variant="contained" fullWidth sx={{mt:10}} >로그인</Button>
        </Container>
    )
}
export default Login;