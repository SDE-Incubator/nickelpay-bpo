import styled from "styled-components";
import { Typography } from "@mui/material";

export const Text = styled(Typography)`
  text-align: center;
  margin-bottom: 70px;


`;

export const Container =  styled.div`
    .errorRequiredEmail {
    color: ${({theme}) => theme.icon[100]};
    position: relative;
    bottom: 12px;
    font-family: "roboto";
    align-self: flex-start;
    font-size: 14px;
  }
`