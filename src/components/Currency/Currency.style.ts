import styled from 'styled-components';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export const CurrencyWrapper = styled.div` 
    display: flex;
    gap: 15px;

`;

export const SelectBox = styled.div ` 
    display: flex;
    justify-content: space-between;
     width: 200px;
    padding: 10px 15px;
    box-shadow: 0px 0px 8px 2px #a9d6e5;
    border: 2px solid #00a6fb;
    border-radius: 5px;
`
export const SelectNumber = styled.input ` 
    width: 80px;
    border: none;
    outline: none;
`
export const CurrencySelect = styled.select`
    width: 60px; 
    cursor: pointer;
    outline: none;
    border: none;
    
`


export const CurrencyOption = styled.option`
    width: 60px;
    cursor: pointer;
    outline: none;
    border: none;
    padding: 10px;
`

export const DeleteIcon = styled(DeleteForeverOutlinedIcon)` 
    cursor: pointer;

`