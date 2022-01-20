import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BlogExampleLibsUiProps {}

const StyledBlogExampleLibsUi = styled.div`
  color: pink;
`;

export function BlogExampleLibsUi(props: BlogExampleLibsUiProps) {
  return (
    <StyledBlogExampleLibsUi>
      <h1>Welcome to BlogExampleLibsUi!</h1>
    </StyledBlogExampleLibsUi>
  );
}

export default BlogExampleLibsUi;
