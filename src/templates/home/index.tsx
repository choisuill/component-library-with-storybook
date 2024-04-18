import styled from 'styled-components';
import Input from '@/components/input';
import { useEffect, useRef } from 'react';

const Heading = styled.h1`
  font-size: 32px;
  color: ${props => props.theme.color.primary};
`;

const HomeTemplate = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div />
      <main>
        <Heading>Components Library</Heading>
        <Input onChange={e => {}} removeAble ref={inputRef} />
      </main>
    </>
  );
};

export default HomeTemplate;
