import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export const PasswordField = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = React.useRef<HTMLInputElement>(null);
    const mergeRef = useMergeRefs(inputRef, ref);
    const onClickReveal = () => {
      onToggle();
      const input = inputRef.current;
      if (input) {
        input.focus({ preventScroll: true });
        const length = input.value.length * 2;
        requestAnimationFrame(() => {
          input.setSelectionRange(length, length);
        });
      }
    };

    return (
      <FormControl id="password" my="2">
        <Flex justify="space-between">
          <FormLabel>Password </FormLabel>
        </Flex>
        <InputGroup>
          <InputRightElement>
            <IconButton
              bg="transparent !important"
              variant="ghost"
              aria-label={isOpen ? 'mask password' : 'reveal password'}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            ref={mergeRef}
            name="password"
            type={isOpen ? 'text' : 'password'}
            autoComplete="current-password"
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
    );
  }
);
export default PasswordField;
