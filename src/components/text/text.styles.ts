import {TextStylesProps} from './index'
import styled from "styled-components";
import { Typography } from "@mui/material";




export const Container = styled(Typography)<Pick<TextStylesProps, "margintop" | "marginbottom" | "fontcolor" | "textsize" | "fontweight">>`
  margin-top: ${({margintop}) => margintop};
  margin-bottom: ${({marginbottom}) => marginbottom};
  color: ${({fontcolor}) => fontcolor || "#222"};
  font-size: ${({textsize}) => textsize || '0.75rem'};

  font-weight: ${({fontweight}) => fontweight};

  text-align: center;

`;


