import { Box, Heading, Text } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface CardProps {
  bg?: string;
  title: string;
  subtitle: string;
  text?: string;
  href?: string;
}

export function Card(props: CardProps) {
  return (
    <a href={props.href ? props.href : ''}>
      <Box
        p="5"
        boxShadow="lg"
        rounded="lg"
        bg={props.bg ? props.bg : 'white'}
      >
        <Heading as="h3" size="md" mb="5">
          {props.title}
        </Heading>
        <Heading as="h5" size="sm" mb="2">
          {props.subtitle}
        </Heading>
        <Text fontSize="sm">{props.text}</Text>
      </Box>
    </a>
  );
}

export default Card;
