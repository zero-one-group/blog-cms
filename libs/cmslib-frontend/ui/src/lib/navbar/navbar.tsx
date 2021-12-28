import { Box, Flex } from '@chakra-ui/react';
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
      <a style={{ color: 'white' }} href="/content-management-form">CMS - Blog</a>
    </Flex>
  );
}

export default Navbar;
