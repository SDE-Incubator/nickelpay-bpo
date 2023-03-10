import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: "#fff";

  display: flex;

  @media (max-width: 580px) {
    flex-direction: column;
  }

  .contentInputNewPassword {
    width: 100%;
    max-width: 540px;
  }
`;

export const Content = styled(Box)`
  width: 100%;
  padding: 20px;
  max-width: 540px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  transition: all .7s;

  @media (max-width: 580px) {
    margin-top: 30px;
  }

  .containerButton {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 70px;
    width: 100%;

    @media (max-width: 580px) {
      gap: 30px;

    }
  }

`;
