import React, { InputHTMLAttributes } from 'react';
import { StyledCheckbox, StyledCheckboxWrapper, StyledFakeCheckbox, StyledLabel } from './style';
import { Color } from './types';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  children: any;
  color: Color;
  name?: string;
  defaultChecked?: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ htmlFor, children, color, name, defaultChecked, onChange, ...props }) => {
  return (
    <StyledCheckboxWrapper>
      <StyledCheckbox
        type="checkbox"
        id={htmlFor}
        name={name}
        defaultChecked={defaultChecked}
        onChange={onChange}
        color={color}
        {...props}
      />
      <StyledFakeCheckbox />
      <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
    </StyledCheckboxWrapper>
  );
};

export type { CheckboxProps };
export default Checkbox;
