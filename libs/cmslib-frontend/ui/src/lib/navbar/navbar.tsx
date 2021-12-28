import { Box, Flex } from '@chakra-ui/react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <Flex bg="#24292f" opacity="95%" position="fixed" w="100%" p="4">
      <h1 style={{ color: 'white' }}>CMS - Blog</h1>
    </Flex>
  );
}

export default Navbar;
