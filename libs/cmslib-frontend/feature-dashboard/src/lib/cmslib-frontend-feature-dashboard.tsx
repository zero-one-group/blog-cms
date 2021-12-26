import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CmslibFrontendFeatureDashboardProps {}

const StyledCmslibFrontendFeatureDashboard = styled.div`
  color: pink;
`;

export function CmslibFrontendFeatureDashboard(
  props: CmslibFrontendFeatureDashboardProps
) {
  return (
    <StyledCmslibFrontendFeatureDashboard>
      <h1>Welcome to CmslibFrontendFeatureDashboard!</h1>
    </StyledCmslibFrontendFeatureDashboard>
  );
}

export default CmslibFrontendFeatureDashboard;
