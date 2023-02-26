import { Button, TextField, Avatar} from '@mui/material';
import styled from "styled-components";
import Link from 'next/link';
import Image from 'next/image';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: "#fff";

  display: flex;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 20px;
  max-width: 540px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

`;

export const ImageContainer = styled(Avatar)`
  width: 155px;
  height: 155px;

  @media (max-width: 580px) {
    width: 120px;
    height: 120px;
  }

`;

export const StyleLink = styled(Link) `
  color: ${({theme}) => theme.general[400]};
  font-size: 0.875rem;
  font-weight: ${({theme}) => theme.typography.h2.fontWeight};

  padding: 5px 8px;

  align-self: flex-end;

  border-radius: 5px;
  transition: all .4s;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background: ${({theme}) => theme.general[75]};
  }



`

export const ButtonStyle = styled(Button)`
  background: ${({theme}) => theme.general[200]};
  padding-right: 40px;
  padding-left: 40px;

  transition: all .2;
  
  &:hover {
    background: #303F9F;
  }

`;

export const Input = styled(TextField)({
  '&': {
    width: '100%'
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
