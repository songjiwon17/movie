import { Container, TextField } from "@mui/material";

function Login(){
    return(
        <Container fixed style={{display:'flex', flexDirection:'column'}}>
            <TextField label='Email Address'/>
            <TextField label='Password' type="password"/>
        </Container>
    )
}
export default Login;