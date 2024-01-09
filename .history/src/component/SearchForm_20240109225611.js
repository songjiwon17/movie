import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchForm(){
    const [searchInput, setSearchInput] = useState('');
    const handleChange = (e)=>{
        setSearchInput(e.target.value);
    }

    return(
            <Box 
                component="form"
                sx={{'& .MuiTextField-root': { m: 1, width: '40ch' }, display:'flex',justifyContent:'center',alignItems:'center',bgcolor:'pink'}}
                noValidate
                autoComplete="off">
                <TextField 
                id="outlined-search" 
                type="search"  
                sx={{bgcolor: '#fff'}} 
                placeholder="영화 제목을 입력하세요"
                onChange={handleChange}/>
                <SearchOutlinedIcon/>
            </Box>
    );
}
export default SearchForm;