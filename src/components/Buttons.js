import styled from "styled-components";

const primaryColor = "#ffffff";
const secondaryColor = "#255c99";
const tertiaryColor = "#7EA3CC";

const Button = styled.button`
    position: relative;
    min-width: 135px;
    min-height: 27px;
    border: 1px solid #000000;
    font-size: 1rem;
    padding: 12px 24px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
`

export const PrimaryButton = styled(Button)`
    background-color: ${primaryColor};
`

export const SecondaryButton = styled(Button)`
    background-color: ${secondaryColor};
    color: white;
`

export const TertiaryButton = styled(Button)`
    background-color: ${tertiaryColor};
`
