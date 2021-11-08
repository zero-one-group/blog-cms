import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PasswordFieldProps {}

const StyledPasswordField = styled.div`
  color: pink;
`;

export function PasswordField(props: PasswordFieldProps) {
  return (
    <StyledPasswordField>
      <h1>Welcome to PasswordField!</h1>
    </StyledPasswordField>
  );
}

export default PasswordField;
