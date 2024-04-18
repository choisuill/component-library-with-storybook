import { InputHTMLAttributes, forwardRef } from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import { StyledSearchWrapper } from './styles';
import Input from '../input';

// id === htmlFor 이기 때문에 동일한 id가 존재하면 안됩니다.

interface SearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  id: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  warned?: boolean;
  iconPosition?: 'left' | 'right';
  onChange: (e: string) => void;
  onClickSearchIcon: () => void;
}

const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    { id, defaultValue, placeholder, disabled, warned, iconPosition = 'right', onChange, onClickSearchIcon, ...props },
    ref
  ) => {
    return (
      <StyledSearchWrapper iconPosition={iconPosition}>
        <Input
          ref={ref}
          id={id}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
        />
        <SearchIcon onClick={() => onClickSearchIcon()} />
      </StyledSearchWrapper>
    );
  }
);

Search.displayName = 'Search';
export type { SearchProps };
export default Search;
