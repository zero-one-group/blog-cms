import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SubmitButtonProps {}

const StyledSubmitButton = styled.div`
  color: pink;
`;

export function SubmitButton(props: SubmitButtonProps) {
  return (
    <StyledSubmitButton>
      <h1>Welcome to SubmitButton!</h1>
    </StyledSubmitButton>
  );
}

export default SubmitButton;
