import { InputProps } from "./input";
import { InputStyles } from "./input.styles";

export function Input({inputError, ...rest}: InputProps) {
    return (
        <>
            <InputStyles {...rest} />
            {inputError ? <div>{inputError}</div> : null}
        </>

    )
}