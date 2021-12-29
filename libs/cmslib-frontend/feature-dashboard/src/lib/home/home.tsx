import styled from 'styled-components';
import { Box, Stack } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div`
  color: pink;
  padding-top: 200rem;
`;

export function Home(props: HomeProps) {
  return (
    <Stack>
      <Box
        m="9"
        mt="16"
        p="9"
        borderColor="gray.300"
        borderWidth="1px"
        rounded="lg"
        bg="gray.100"
      >
        <h1>Welcome to Home!</h1>
      </Box>
    </Stack>
  );
}

export default Home;
