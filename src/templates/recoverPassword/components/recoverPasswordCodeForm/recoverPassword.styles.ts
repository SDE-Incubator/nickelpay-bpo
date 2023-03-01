import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 540px;

  text-align: center;

  .errorRequiredCode{
    color: ${({theme}) => theme.icon[100]};
    position: relative;
    bottom: 12px;
    font-family: "roboto";
    align-self: flex-start;
    font-size: 14px;
  }

  .containerSeconds {
    font-family: 'roboto';
    text-align: center;
  }
`;

export const ContentButton = styled(Box)`
  margin: auto;
  width: 100%;
  max-width: 164px;

`