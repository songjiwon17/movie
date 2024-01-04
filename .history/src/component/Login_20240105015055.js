import { Button, Checkbox, Container, FormControlLabel, Link, TextField } from "@mui/material";

function Login(){
    return(
        <Container fixed style={{display:'flex', flexDirection:'column'}}>
            <TextField label='Email Address' required fullWidth name="email" autoComplete="email" autoFocus/>
            <TextField label='Password' type="password" required fullWidth name="password" autoComplete="current-password"/>
            <FormControlLabel control={<Checkbox value='remember' color="primary"/>} label="로그인 정보 기억하기"/>
            <Button type="submit" variant="contained" fullWidth sx={{mt:3}} >로그인</Button>
            <Link>회원가입하기</Link>
            <Link>비밀번호 찾기</Link>
        </Container>
    )
}
export default Login;