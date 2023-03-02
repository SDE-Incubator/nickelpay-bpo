import styled from "styled-components";
import { TextField } from "@mui/material";

export const InputStyles = styled(TextField)({
    '&': {
      width: '100%',
      marginBottom: '1.5rem'
    },
  
    '& label.Mui-focused': {
      color: `#21285E`,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#999591',
      },
  
      '&.Mui-focused fieldset': {
        borderColor: '#21285E',
      }
    }

    
});
  

export const AlertError = styled.div`
  color: ${({ theme }) => theme.icon[100]};
  position: relative;
  bottom: 12px;
  font-family: 'roboto';
  align-self: flex-start;
  font-size: 14px;
  align-self: flex-start;

  /* usando para todos os erros */

`;