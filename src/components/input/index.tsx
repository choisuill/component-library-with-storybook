import React, { ChangeEvent, InputHTMLAttributes, useRef, forwardRef, useState } from 'react';
import { Cancel } from '@mui/icons-material';
import { StyledInput, StyledWrapper } from './styles';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (e: string) => void;
  defaultValue?: string;
  required?: boolean;
  removeAble?: boolean;
  disabled?: boolean;
  warned?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, defaultValue, removeAble, disabled, required, warned, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState<string | undefined>(defaultValue);
    const bubbleUpChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onChange(e.target.value);
    };

    const onClear = () => {
      if (!disabled) {
        if (ref && 'current' in ref && ref.current) {
          ref.current.value = '';
        }
        if (inputRef.current && ref == null) {
          inputRef.current.value = '';
        }
        setInputValue('');
        onChange('');
      }
    };

    return (
      <StyledWrapper>
        <StyledInput
          ref={ref || inputRef}
          onChange={bubbleUpChangeEvent}
          defaultValue={defaultValue}
          required={required}
          disabled={disabled}
          warned={warned}
          {...props}
        />
        {removeAble && inputValue != null && inputValue !== '' && !disabled && <Cancel onClick={onClear} />}
      </StyledWrapper>
    );
  }
);

Input.displayName = 'Input';
export type { InputProps };
export default Input;
