import styled from 'styled-components';

interface StyledSearchWrapperProps {
  iconPosition: 'left' | 'right';
}

const StyledSearchWrapper = styled.div<StyledSearchWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;

  ${({ iconPosition }) =>
    iconPosition === 'left'
      ? `
    input {
      padding: 20px 16px 20px 56px;
    }

    svg {
      left: 20px;
    }
    `
      : `
    input {
      padding: 20px 56px 20px 16px;
    }

    svg {
      right: 20px;
    }
    `}

  svg {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    color: ${({ theme }) => theme.color.g600};
    cursor: pointer;
  }
`;

export { StyledSearchWrapper };
