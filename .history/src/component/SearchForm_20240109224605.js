import styled from "@emotion/styled";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import {useState} from "react";

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
            <TextField 
            id="outlined-search" 
            /* label="영화 제목 찾기"  */
            type="search" 
            sx={{bgcolor: '#fff'}} 
            placeholder="영화 제목을 입력하세요"
            onChange={handleChange}/>
        </Container>
    );
}
export default SearchForm;