import styled from 'styled-components';

const StyledTextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    gap: 8px;
  }
`;

const StyledInputAndButton = styled.div`
  display: flex;
  gap: 10px;

  input {
    width: 100%;
  }
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledHelperText = styled.span`
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.color.g800};
`;

export { StyledTextFieldWrapper, StyledInputWrapper, StyledHelperText, StyledInputAndButton };
