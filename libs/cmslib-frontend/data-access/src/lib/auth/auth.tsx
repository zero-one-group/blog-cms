import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AuthProps {}

const StyledAuth = styled.div`
  color: pink;
`;

export function Auth(props: AuthProps) {
  return (
    <StyledAuth>
      <h1>Welcome to Auth!</h1>
    </StyledAuth>
  );
}

export default Auth;
