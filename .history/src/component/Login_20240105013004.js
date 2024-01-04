import { Container, TextField } from "@mui/material";

function Login(){
    return(
        <Container fixed>
            <TextField label='Email Address'/>
            <TextField label='password'/>
        </Container>
    )
}
export default Login;