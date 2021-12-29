import { Box, Flex, Spacer } from '@chakra-ui/react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <Flex
      bg="#24292f"
      opacity="95%"
      position="fixed"
      w="100%"
      p="4"
      zIndex="100"
    >
      <a style={{ color: 'white' }} href="/home">
        CMS - Blog
      </a>
      <Spacer />
      <a style={{ color: 'white' }} href="/login">
        Logout
      </a>
    </Flex>
  );
}

export default Navbar;
