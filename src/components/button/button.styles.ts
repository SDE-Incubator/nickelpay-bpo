import styled from "styled-components";
import { Button } from "@mui/material";

export const Container = styled(Button)`
  background: ${({theme}) => theme.general[200]};
  color: ${({theme}) => theme.general[100]};
  padding-right: 40px;
  padding-left: 40px;

  transition: all .2;
  
  &:hover {
    background: #303F9F;
  }

`;


