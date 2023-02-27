import { TextFieldProps } from "@mui/material";

export type InputProps = TextFieldProps & {
  inputError?: string;
};