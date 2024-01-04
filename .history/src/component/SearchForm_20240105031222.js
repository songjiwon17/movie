import { Container } from '@mui/material';            
import {TextField, InputAdornment} from '@mui/material/TextField';
import SearchIcon from "@material-ui/icons/Search";

function SearchForm(){
    return(
        <Container component='main' maxWidth='lg'>
            <TextField
                variant="outlined"
                InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <SearchIcon />
                </InputAdornment>
                ),
                }}
            />
        </Container>
    )
}
export default SearchForm;