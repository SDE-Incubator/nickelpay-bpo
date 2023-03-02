import { InputProps } from "./input";
import { InputStyles, AlertError } from "./input.styles";

export function Input({inputError, ...rest}: InputProps) {
    return (
        <>
            <InputStyles {...rest} />
            {inputError ? <AlertError>{inputError}</AlertError> : null}
        </>

    )
}