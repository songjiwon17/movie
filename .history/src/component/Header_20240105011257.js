import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import {Grid} from '@mui/material';

function Header(){
    return(
        <Container>
            <Grid container style={{display: 'flex', alignItems:'center'}}>
            <Grid item xs='10'>
                <Typography style={{border: '1px solid #ccc', textAlign:'center'}} variant="h2">MOVIE</Typography>
            </Grid>
            <Grid item xs='2'>
                <Button variant="contained" >로그인</Button>
            </Grid>
            </Grid>
            <Dialog open={true}>
                <DialogTitle style={{color:'#000'}}>로그인</DialogTitle>
                <DialogContent>
                    <DialogContentText>로그인 폼 만들기</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained">확인</Button>
                    <Button variant="outline">취소</Button>
                </DialogActions>
            </Dialog>

        </Container>
    )
}
export default Header;