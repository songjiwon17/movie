import TextField from '@mui/material/TextField';

function SearchForm(){
    return(
        <>
        <TextField
        style={{
            width: 800,
            background: '#ccc'

        }}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          placeholder='찾고싶은 영화를 검색하세요.'
        />
        </>
    )
}
export default SearchForm;