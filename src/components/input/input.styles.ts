import styled from "styled-components";
import { TextField } from "@mui/material";

export const InputStyles = styled(TextField)({
    '&': {
      width: '100%',
      marginBottom: '1.5rem',
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
  