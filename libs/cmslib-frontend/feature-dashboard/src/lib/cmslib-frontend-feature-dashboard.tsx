import { Navbar } from '@cms-blog/cmslib-frontend/ui';
import { Home } from './home/home';
import { ContentManagementForm } from './content-management-form/content-management-form';
import { Route } from 'react-router-dom';
import { Stack, useColorModeValue, Text } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface CmslibFrontendFeatureDashboardProps {}

export function CmslibFrontendFeatureDashboard(
  props: CmslibFrontendFeatureDashboardProps
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
        <Route path="/home" exact render={() => <Home />} />
        <Route
          path="/content-management-form"
          exact
          render={() => <ContentManagementForm />}
        />
      </Stack>
      <Stack
        bg={useColorModeValue('#636e72', 'inherit')}
        spacing={0}
        minHeight="10vh"
      >
        <Text textColor="white" fontSize="md" mt="5" textAlign="center">
          Blog-CMS <br /> © {year} Muhammad Wildan Nur Karim
        </Text>
      </Stack>
    </>
  );
}

export default CmslibFrontendFeatureDashboard;
