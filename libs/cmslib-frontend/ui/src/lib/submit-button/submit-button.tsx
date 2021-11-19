import { Button } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface SubmitButtonProps {
  buttonLabel: string;
  form?: string;
}

export function SubmitButton(props: SubmitButtonProps) {
  return (
    <Button
      my="3"
      type="submit"
      colorScheme="cyan"
      size="lg"
      fontSize="md"
      data-cy="login"
      form={props.form}
      minW="full"
      data-testid="button-label"
    >
      {props.buttonLabel}
    </Button>
  );
}

export default SubmitButton;
