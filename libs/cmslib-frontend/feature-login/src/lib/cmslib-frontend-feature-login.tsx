import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CmslibFrontendFeatureLoginProps {}

const StyledCmslibFrontendFeatureLogin = styled.div`
  color: pink;
`;

export function CmslibFrontendFeatureLogin(
  props: CmslibFrontendFeatureLoginProps
) {
  return (
    <StyledCmslibFrontendFeatureLogin>
      <h1>Welcome to CmslibFrontendFeatureLogin!</h1>
    </StyledCmslibFrontendFeatureLogin>
  );
}

export default CmslibFrontendFeatureLogin;
