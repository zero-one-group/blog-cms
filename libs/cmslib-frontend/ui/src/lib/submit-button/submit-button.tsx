import { Button } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface SubmitButtonProps {
  buttonLabel: string;
  form?: string;
}

export function SubmitButton(props: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      colorScheme="cyan"
      size="lg"
      fontSize="md"
      data-cy="login"
      form={props.form}
    >
      {props.buttonLabel}
    </Button>
  );
}

export default SubmitButton;
