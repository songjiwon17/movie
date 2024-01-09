import styled from "@emotion/styled";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import { OutlinedInput } from '@mui/material';
import TextField from '@mui/material/TextField';

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;
function SearchForm(){
    const [searchInput, setSearchInput] = useState('');
    const handleChange = (e)=>{
        setSearchInput(e.target.value);
    }

    return(
        <Container>
            <TextField id="outlined-search" label="Search field" type="search" />
            <OutlinedInput
                sx={{bgcolor: '#fff'}}
                onChange={handleChange}
            />
            <Button>검색</Button>
        </Container>
    );
}
export default SearchForm;