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
  bg?: string;
  maxWidth?: string;
  defaultValues: string;
}

export const TextAreaField = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>((props, ref) => {
  const textAreaRef = React.useRef(null);
  const mergeRef = useMergeRefs(textAreaRef, ref);
  return (
    <FormControl pt="2">
      <FormLabel data-testid="field-title">{props.label}</FormLabel>
      <Textarea
        maxWidth={props.maxWidth ? props.maxWidth : '50rem'}
        bg={props.bg ? props.bg : 'white'}
        ref={mergeRef}
        defaultValue={props.defaultValues ? props.defaultValues : ''}
        required
        {...props}
      />
    </FormControl>
  );
});

export default TextAreaField;
