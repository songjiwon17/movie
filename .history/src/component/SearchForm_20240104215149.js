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
        />
        </>
    )
}
export default SearchForm;