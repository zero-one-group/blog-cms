import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CmslibFrontendDataAccessProps {}

const StyledCmslibFrontendDataAccess = styled.div`
  color: pink;
`;

export function CmslibFrontendDataAccess(props: CmslibFrontendDataAccessProps) {
  return (
    <StyledCmslibFrontendDataAccess>
      <h1>Welcome to CmslibFrontendDataAccess!</h1>
    </StyledCmslibFrontendDataAccess>
  );
}

export default CmslibFrontendDataAccess;
