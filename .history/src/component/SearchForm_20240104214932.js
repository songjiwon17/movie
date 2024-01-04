import TextField from '@mui/material/TextField';

function SearchForm(){
    return(
        <>
        <TextField
        style={{
            width: 100px

        }}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        </>
    )
}
export default SearchForm;