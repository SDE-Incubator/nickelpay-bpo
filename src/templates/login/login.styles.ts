import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { TitleProps } from "./login";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.general[300]};
`;

export const Title = styled(Typography)<TitleProps>`
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  font-size: ${({ size }) => size};
  color: white;
`;
