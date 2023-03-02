import {TextStylesProps} from './index'
import styled from "styled-components";
import { Typography } from "@mui/material";




export const Container = styled(Typography)<Pick<TextStylesProps, "margintop" | "marginbottom" | "fontcolor" >>`
  margin-top: ${({margintop}) => margintop};
  margin-bottom: ${({marginbottom}) => marginbottom};
  color: ${({fontcolor}) => fontcolor || "#222"};


`;


