import { TextAreaField, Navbar } from '@cms-blog/cmslib-frontend/ui';
import { Home } from './home/home';
import { ContentManagementForm } from './content-management-form/content-management-form';
import { Route, useHistory } from 'react-router-dom';
import {
  Stack,
  useColorModeValue,
  Box,
  Button,
  Heading,
  CloseButton,
} from '@chakra-ui/react';
import { useForm, useFieldArray } from 'react-hook-form';
import { AddIcon } from '@chakra-ui/icons';

/* eslint-disable-next-line */
export interface CmslibFrontendFeatureDashboardProps {}

export function CmslibFrontendFeatureDashboard(
  props: CmslibFrontendFeatureDashboardProps
) {
  return (
    <Stack
      bg={useColorModeValue('gray.300', 'inherit')}
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
  );
}

export default CmslibFrontendFeatureDashboard;
