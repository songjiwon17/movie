import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';

function SearchForm(){
    return(
        <Container component='main' maxWidth='lg'>
        <TextField
        style={{
            width: '50%',
            background: '#fff',
        }}
          id="filled-search"
          label="찾고싶은 영화를 검색하세요."
          type="search"
          variant="filled"
        />
        </Container>
    )
}
export default SearchForm;