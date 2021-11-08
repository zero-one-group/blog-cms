import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CmslibFrontendUiProps {}

const StyledCmslibFrontendUi = styled.div`
  color: pink;
`;

export function CmslibFrontendUi(props: CmslibFrontendUiProps) {
  return (
    <StyledCmslibFrontendUi>
      <h1>Welcome to CmslibFrontendUi!</h1>
    </StyledCmslibFrontendUi>
  );
}

export default CmslibFrontendUi;
