import { Input, FormLabel, FormControl, useMergeRefs } from '@chakra-ui/react';
import * as React from 'react';

/* eslint-disable-next-line */
export interface InputFieldProps {
  label: string;
  type: string;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const mergeRef = useMergeRefs(inputRef, ref);

    return (
      <FormControl my="2">
        <FormLabel data-testid="field-title">{props.label}</FormLabel>
        <Input
          ref={mergeRef}
          autoComplete="current-password"
          required
          {...props}
        />
      </FormControl>
    );
  }
);

export default InputField;
