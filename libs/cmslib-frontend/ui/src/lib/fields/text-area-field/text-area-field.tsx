import {
  Textarea,
  FormLabel,
  FormControl,
  useMergeRefs,
} from '@chakra-ui/react';
import * as React from 'react';

/* eslint-disable-next-line */
export interface TextAreaFieldProps {
  label: string;
  type: string;
}

export const TextAreaField = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>((props, ref) => {
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const mergeRef = useMergeRefs(textAreaRef, ref);
  return (
    <FormControl>
      <FormLabel data-testid="field-title">{props.label}</FormLabel>
      <Textarea ref={mergeRef} required {...props} />
    </FormControl>
  );
});

export default TextAreaField;
