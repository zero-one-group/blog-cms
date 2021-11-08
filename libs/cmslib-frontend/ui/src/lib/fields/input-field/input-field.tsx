import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';

/* eslint-disable-next-line */
export interface InputFieldProps {
  label: string;
  type: string;
}

export function InputField(props: InputFieldProps & FieldHookConfig<string>) {
  const [field, meta] = useField(props);
  return (
    <FormControl>
      <FormLabel>{props.label}</FormLabel>
      <Input {...field} type={props.type} />
      {meta.touched && meta.error ? (
        <FormErrorMessage fontSize="xs">{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
}

export default InputField;
