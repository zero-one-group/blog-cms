import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TextAreaFieldProps {}

const StyledTextAreaField = styled.div`
  color: pink;
`;

export function TextAreaField(props: TextAreaFieldProps) {
  return (
    <StyledTextAreaField>
      <h1>Welcome to TextAreaField!</h1>
    </StyledTextAreaField>
  );
}

export default TextAreaField;
