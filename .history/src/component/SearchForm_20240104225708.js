import TextField from '@mui/material/TextField';

function SearchForm(){
    return(
        <>
        <TextField
        style={{
            width: '50%',
            background: '#ccc'

        }}
          id="filled-search"
          label="찾고싶은 영화를 검색하세요."
          type="search"
          variant="filled"
        />
        </>
    )
}
export default SearchForm;