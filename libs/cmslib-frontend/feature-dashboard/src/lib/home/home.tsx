import styled from 'styled-components';
import { Box, Stack, Heading, Flex, HStack, Grid } from '@chakra-ui/react';
import { Card } from '@cms-blog/cmslib-frontend/ui';

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
        <Heading as="h3" size="lg" mb="3">
          Dashboard
        </Heading>
        <Heading as="h5" size="md" mt='16'>
          Choose Your Project:
        </Heading>
        <Grid templateColumns='repeat(4, 1fr)' gap={16} mt='8'>
          <Card
            title="surabaya.py"
            subtitle="webpage 1"
            href="/content-management-form"
          />
          <Card
            title="surabaya.py"
            subtitle="webpage 1"
            href="/content-management-form"
          />
          <Card
            title="surabaya.py"
            subtitle="webpage 1"
            href="/content-management-form"
          />
          <Card
            title="surabaya.py"
            subtitle="webpage 1"
            href="/content-management-form"
          />
           <Card
            title="surabaya.py"
            subtitle="webpage 1"
            href="/content-management-form"
          />
           <Card
            title="surabaya.py"
            subtitle="webpage 1"
            href="/content-management-form"
          />
        </Grid>
        <Heading as="h5" size="md" mt="28">
          Or Just Create New One!
        </Heading>
        <Grid templateColumns='repeat(5, 1fr)' gap={16} mt='8'>
         <Card
            title="Create New Project"
            subtitle="+"
            href="/content-management-form"
            bg='green.300'
          />
          </Grid>
      </Box>
    </Stack>
  );
}

export default Home;
