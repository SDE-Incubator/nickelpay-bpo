import { ButtonProps } from "@mui/material";

export type ButtonStylesProps = ButtonProps & {
    title: string;
    variant: "text" | "outlined" | "contained" | undefined
    type: string;

}

