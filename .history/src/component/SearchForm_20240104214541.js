import TextField from '@mui/material/TextField';

function SearchForm(){
    return(
        <>
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        </>
    )
}
export default SearchForm;