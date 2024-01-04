import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';

function SearchForm(){
    return(
        <Container component='main' maxWidth='lg'>
        <TextField sx={{mb:10, backgroundColor:'#ededed'}}
          variant="filled"
          label="찾고싶은 영화를 검색하세요."
          type="search"
          fullWidth
        />
        </Container>
    )
}
export default SearchForm;