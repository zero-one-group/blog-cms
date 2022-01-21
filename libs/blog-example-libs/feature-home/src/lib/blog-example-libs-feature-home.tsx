import { Navbar } from '@cms-blog/blog-example-libs/ui';
import { Home } from './home/home';
import { Route } from 'react-router-dom';
import { Stack, useColorModeValue, Text } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface BlogExampleLibsFeatureHomeProps {}

export function BlogExampleLibsFeatureHome(
  props: BlogExampleLibsFeatureHomeProps
) {
  const year = new Date().getFullYear();
  return (
    <>
      <Stack
        bg={useColorModeValue('white', 'inherit')}
        spacing={0}
        minHeight="100vh"
      >
        <Navbar />
        <Route path="/" exact render={() => <Home />} />
      </Stack>
      <Stack
        bg={useColorModeValue('#636e72', 'inherit')}
        spacing={0}
        minHeight="10vh"
      >
        <Text textColor="white" fontSize="md" mt="5" textAlign="center">
          © Copyright Surabaya.py. All Rights Reserved <br />
          Designed by React with Love :*
        </Text>
      </Stack>
    </>
  );
}

export default BlogExampleLibsFeatureHome;
