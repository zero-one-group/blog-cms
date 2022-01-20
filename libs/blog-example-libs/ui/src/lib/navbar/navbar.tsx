import { Button, Flex, Spacer, Image } from '@chakra-ui/react';
import styled from 'styled-components';
import logo from '../images/logosbypy.png';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <Flex
      bg="#fffff"
      position="fixed"
      w="100%"
      py="4"
      px="20"
      zIndex="100"
      boxShadow="lg"
    >
      <a href="/">
        <Image htmlWidth={'150rem'} src={logo} alt="haha" />
      </a>

      <Spacer />
      <Button colorScheme="facebook" href="/" mt="1">
        Gabung
      </Button>
    </Flex>
  );
}

export default Navbar;
