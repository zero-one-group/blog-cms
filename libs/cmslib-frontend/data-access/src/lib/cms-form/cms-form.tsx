import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CmsFormProps {}

const StyledCmsForm = styled.div`
  color: pink;
`;

export function CmsForm(props: CmsFormProps) {
  return (
    <StyledCmsForm>
      <h1>Welcome to CmsForm!</h1>
    </StyledCmsForm>
  );
}

export default CmsForm;
