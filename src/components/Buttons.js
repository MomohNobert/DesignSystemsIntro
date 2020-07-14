import styled from "styled-components";
import { typeScale } from "../utils";

import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
    small: () => `
      font-size: ${typeScale.helperText};
      padding: 8px;
    `,
    large: () => `
      font-size: ${typeScale.header5};
      padding: 16px 24px;
    `,
    warning: ({ props }) => `
      background: none;
      color: ${props.theme.status.warningColor};
      &:hover, &:focus {
        background-color: ${props.theme.status.warningColorHover};
        outline: 3px solid ${props.theme.status.warningColorHover};
        outline-offset: 2px;
        border: 2px solid transparent;
      }
  
      &:active {
        background-color: ${props.theme.status.warningColorActive};
      }
    `,
    primaryButtonWarning: ({ props }) => `
      background-color: ${props.theme.status.warningColor};
      color: ${props.theme.textColorInverted};
    `,
    secondaryButtonWarning: ({ props }) => `
      border: 2px solid ${props.theme.status.warningColor};
    `,
    error: ({ props }) => `
      background: none;
      color: ${props.theme.status.errorColor};
      &:hover, &:focus {
        background-color: ${props.theme.status.errorColorHover};
        outline: 3px solid ${props.theme.status.errorColorHover};
        outline-offset: 2px;
        border: 2px solid transparent;
      }
      &:active {
        background-color: ${props.theme.status.errorColorActive};
      }
    `,
    primaryButtonError: ({ props }) => `
      background-color: ${props.theme.status.errorColor};
      color: ${props.theme.textColorInverted};
    `,
    secondaryButtonError: ({ props }) => `
      border: 2px solid ${props.theme.status.warningColor};
    `,
    success: ({ props }) => `
      background: none;
      color: ${props.theme.status.successColor};
      &:hover, &:focus {
        background-color: ${props.theme.status.successColorHover};
        outline: 3px solid ${props.theme.status.successColorHover};
        outline-offset: 2px;
        border: 2px solid transparent;
      }
      &:active {
        background-color: ${props.theme.status.successColorActive};
      }
    `,
    primaryButtonSuccess: ({ props }) => `
      background-color: ${props.theme.status.successColor};
      color: ${props.theme.textColorInverted};
    `,
    secondaryButtonSuccess: ({ props }) => `
      border: 2px solid ${props.theme.status.warningColor};
    `
};

const Button = styled.button`
    position: relative;
    min-width: 135px;
    min-height: 27px;
    border: 1px solid #000000;
    font-size: ${typeScale.paragraph};
    padding: 12px 24px;
    cursor: pointer;
    font-family: ${props => props.theme.primaryFont};
    transition: background-color 0.2s linear, color 0.2s linear;

    &:hover {
        background: ${props => props.theme.primaryColorHover};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:focus {
        outline: 3px solid ${props => props.theme.primaryColorHover};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${props => props.theme.primaryColorActive};
        border-color: ${props => props.theme.primaryColorActive};
        color: ${props => props.theme.textColorOnPrimary};
    }
`

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  border: 2px solid transparent;
  color: ${props => props.theme.textColorOnPrimary};

  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;


export const SecondaryButton = styled(Button)`
  border: 2px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};
  background: none;

  &:disabled {
    background: none;
    border: 2px solid ${props => props.theme.disabled};
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${props => props.theme.primaryColor};
  background: none;

  &:disabled {
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
