import styled from "styled-components";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';


export const ContainerCurrency = styled(Container)`
  margin-top: 55px;
`;

export const Wrapper = styled(Box)`
  display: flex;
  gap: 15px;
`;

export const LeftSide = styled(Box)` 
  
`;
export const Result = styled.div`  
 margin-top: 30px;
`

export const SelectRow = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`
export const SelectBox1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
export const SelectBox2 = styled.div`  
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
`

export const RightSide = styled(Box)``;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 24px 0 14px;
`;
export const InputCurrency = styled.input`
  width: 200px;
  height: 45px;
  border: 1px solid #00a6fb;
  border-radius: 5px;
  padding: 0 10px;
  outline: none;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  box-shadow: 0px 0px 8px 2px #a9d6e5;
  &:focus {
    border: 1px solid #00a6fb;
  }
`;

export const AddCurrency = styled(ControlPointIcon)`
  cursor: pointer;
`;
export const AddButton = styled.div``;
export const RightTitle = styled.h3``;

export const ButtonConverter = styled(Button)` 

`

export const ConvertedCurrency = styled.p`  
  font-size: 26px;
  color: #666;
  font-weight: bold;

`