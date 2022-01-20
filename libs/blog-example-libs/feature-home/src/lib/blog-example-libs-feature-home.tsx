import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BlogExampleLibsFeatureHomeProps {}

const StyledBlogExampleLibsFeatureHome = styled.div`
  color: pink;
`;

export function BlogExampleLibsFeatureHome(
  props: BlogExampleLibsFeatureHomeProps
) {
  return (
    <StyledBlogExampleLibsFeatureHome>
      <h1>Welcome to BlogExampleLibsFeatureHome!</h1>
    </StyledBlogExampleLibsFeatureHome>
  );
}

export default BlogExampleLibsFeatureHome;
