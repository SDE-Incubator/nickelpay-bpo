import styled from "styled-components";
import { Button } from "@mui/material";
import { ButtonStylesProps } from "./button";



export const Container = styled(Button)<Pick<ButtonStylesProps, "width" | "height" | "bgcolor" | "textcolor" | "bghover" | "bordercolor">>`
  background: ${({bgcolor}) => bgcolor};
  color: ${({textcolor}) => textcolor};
  width: ${({width}) => width || "100%"};
  height: ${({height}) => height};

  border: 1px solid ${({bordercolor}) => bordercolor || 'transparent'};

  transition: all .2;

  &:hover {
    background: ${({bghover}) => bghover};

    border: 1px solid ${({bordercolor}) => bordercolor || 'transparent'};
  }


`;


