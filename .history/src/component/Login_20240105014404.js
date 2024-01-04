import { Button, Checkbox, Container, FormControlLabel, TextField } from "@mui/material";

function Login(){
    return(
        <Container fixed style={{display:'flex', flexDirection:'column'}}>
            <TextField label='Email Address' required fullWidth name="email" autoComplete="email" autoFocus/>
            <TextField label='Password' type="password" required fullWidth name="password" autoComplete="current-password"/>
            <FormControlLabel control={<Checkbox value='remember' color="primary"/>}/>
            <Button type="submit" variant="contained">로그인</Button>
        </Container>
    )
}
export default Login;