import styled from "styled-components";
export const Container =  styled.div`

  width: 100%;
  max-width: 540px;
  text-align: center;

  .errorRequiredEmail {
    color: ${({theme}) => theme.icon[100]};
    position: relative;
    bottom: 12px;
    font-family: "roboto";
    align-self: flex-start;
    font-size: 14px;
  }
`