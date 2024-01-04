import { Container, TextField } from "@mui/material";

function Login(){
    return(
        <div>
            <TextField label='Email Address'/>
            <TextField label='Password' type="password"/>
        </div>
    )
}
export default Login;