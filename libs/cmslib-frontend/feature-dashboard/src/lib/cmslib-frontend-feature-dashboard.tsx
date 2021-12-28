import styled from 'styled-components';
import { TextAreaField, Navbar } from '@cms-blog/cmslib-frontend/ui';
import { Route } from 'react-router-dom';
import { Stack, useColorModeValue, Box } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface CmslibFrontendFeatureDashboardProps {}

export function CmslibFrontendFeatureDashboard(
  props: CmslibFrontendFeatureDashboardProps
) {
  return (
    <Stack bg={useColorModeValue('white', 'inherit')} spacing={0}>
      <Navbar/>
      <Box m="9" p="9" pt='20' borderColor="gray.300" borderWidth="1px" rounded="lg">
        <h1>Welcome to CMS-Blog!</h1>
        <Box mt='5' p="9" pt='6' borderColor="gray.300" borderWidth="1px" rounded="lg">

        <TextAreaField label="haha" />
        </Box>
      </Box>
    </Stack>
  );
}

export default CmslibFrontendFeatureDashboard;
