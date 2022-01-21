import {
  Box,
  Heading,
  Text,
  CloseButton,
  Spacer,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';
import * as React from 'react';
import { URL } from '@cms-blog/cmslib-frontend/data-access';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

/* eslint-disable-next-line */
export interface CardProps {
  bg?: string;
  title: string;
  subtitle?: string;
  image?: string;
  text?: string | null;
  href?: string;
  boxShadow?: string;
}

export function Card(props: CardProps) {
  return (
    <Box
      pl="4"
      pr="4"
      py="6"
      ml="4"
      mr="4"
      my="6"
      boxShadow={props.boxShadow ? props.boxShadow : 'lg'}
      rounded="lg"
      maxWidth="20rem"
      bg={props.bg ? props.bg : 'white'}
    >
      <a
        style={{ cursor: 'pointer' }}
        href={props.href ? props.href : undefined}
      >
        <img src={props.image} alt="" />
        <Heading as="h3" size="md" mt="2" mb="5">
          {props.title}
        </Heading>
        <Heading as="h5" size="sm" mb="2">
          {props.subtitle}
        </Heading>
        <Text fontSize="sm">{props.text}</Text>
      </a>
    </Box>
  );
}

export default Card;
