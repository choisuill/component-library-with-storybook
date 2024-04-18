import styled from 'styled-components';
import { Color, StyledCheckboxProps } from './types';

const colorSet = (color: Color, theme: any) => {
  if (color === 'primary') {
    return `
      &:focus + span {
        border: 2px solid ${theme.color.primary};
      }
      &:checked + span {
        background-color: ${theme.color.primary};
        border: 2px solid ${theme.color.primary};

        &:before {
          transform: translate(10%, -100%) rotate(-45deg) scale(1);
        }
      }
    `;
  }

  if (color === 'secondary') {
    return `
      &:focus + span {
        border: 2px solid ${theme.color.secondary};
      }
      &:checked + span {
        background-color: ${theme.color.secondary};
        border: 2px solid ${theme.color.secondary};

        &:before {
          transform: translate(10%, -100%) rotate(-45deg) scale(1);
        }
      }
    `;
  }

  if (color === 'black') {
    return `
      &:focus + span {
        border: 2px solid ${theme.color.black};
      }
      &:checked + span {
        background-color: ${theme.color.black};
        border: 2px solid ${theme.color.black};

        &:before {
          transform: translate(10%, -100%) rotate(-45deg) scale(1);
        }
      }
    `;
  }

  if (color === 'white') {
    return `
      &:focus + span {
        border: 2px solid ${theme.color.white};
      }
      &:checked + span {
        background-color: ${theme.color.white};
        border: 2px solid ${theme.color.white};

        &:before {
          transform: translate(10%, -100%) rotate(-45deg) scale(1);
          border-color: ${theme.color.black}
        }
      }
    `;
  }

  return '';
};

const StyledCheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;
// display: none;
const StyledCheckbox = styled.input<StyledCheckboxProps>`
  position: absolute;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  opacity: 0;
  cursor: pointer;
  ${({ color, theme }) => colorSet(color, theme)}

  &:checked:disabled + span {
    background-color: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.g400};
    &:before {
      border-color: ${({ theme }) => theme.color.g400};
    }
  }
`;

const StyledFakeCheckbox = styled.span`
  display: inline-block;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.color.g400};
  border-radius: 2px;

  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 4px;
    border-left: 2px solid ${({ theme }) => theme.color.white};
    border-bottom: 2px solid ${({ theme }) => theme.color.white};
    transform: translate(10%, -100%) rotate(-45deg) scale(0);
    transition: transform 0.25s ease;
  }

  transition: all 0.25s ease;
`;

const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.g600};
`;

export { StyledCheckbox, StyledFakeCheckbox, StyledCheckboxWrapper, StyledLabel };
