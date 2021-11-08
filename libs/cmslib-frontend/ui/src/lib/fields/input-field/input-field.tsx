import styled from 'styled-components';

/* eslint-disable-next-line */
export interface InputFieldProps {}

const StyledInputField = styled.div`
  color: pink;
`;

export function InputField(props: InputFieldProps) {
  return (
    <StyledInputField>
      <h1>Welcome to InputField!</h1>
    </StyledInputField>
  );
}

export default InputField;
