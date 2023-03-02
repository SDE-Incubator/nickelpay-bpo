import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 540px;

  text-align: center;

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

export const Form = styled.form`
  width: 100%;
  max-width: 540px;
  text-align: center; // Serve para deixar o error dos inputs alinhados a esquerda

  display: flex;
  flex-direction: column;
`;