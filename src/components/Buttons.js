import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

const Button = styled.button`
    position: relative;
    min-width: 135px;
    min-height: 27px;
    border: 1px solid #000000;
    font-size: ${typeScale.paragraph};
    padding: 12px 24px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
`

export const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    color: white;
`

export const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${defaultTheme.primaryColor};
`

export const TertiaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${defaultTheme.primaryColor}
`
