import { Button, Checkbox, Container, TextField } from "@mui/material";

function Login(){
    return(
        <Container fixed style={{display:'flex', flexDirection:'column'}}>
            <TextField label='Email Address'/>
            <TextField label='Password' type="password"/>
            <Checkbox value='remember' color="primary"/>
            <Button type="submit" variant="contained">로그인</Button>
        </Container>
    )
}
export default Login;