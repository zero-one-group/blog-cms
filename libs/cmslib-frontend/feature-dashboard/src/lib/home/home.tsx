import styled from 'styled-components';
import { Box, Stack, Heading, Flex, HStack, Grid } from '@chakra-ui/react';
import {
  getDashboardData,
  DashboardDataProps,
} from '@cms-blog/cmslib-frontend/data-access';
import { Card } from '@cms-blog/cmslib-frontend/ui';
import { useEffect, useState, useMemo } from 'react';
/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const [dashboardData, setDashboardData] = useState<DashboardDataProps[]>([]);

  useEffect(() => {
    getDashboardData().then((results) => {
      return setDashboardData(results);
    });
  }, []);

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
        <Heading as="h5" size="md" mt="16">
          Choose Your Project:
        </Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={16} mt="8">
          {dashboardData.map((data, index) => {
            return (
              <Card
                title={data.title}
                subtitle={data.subtitle}
                text={data.text}
                href="/content-management-form"
              />
            );
          })}
        </Grid>
        <Heading as="h5" size="md" mt="28">
          Or Just Create New One!
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap={16} mt="8">
          <Card
            title="Create New Project"
            subtitle="+"
            href="/content-management-form"
            bg="green.300"
          />
        </Grid>
      </Box>
    </Stack>
  );
}

export default Home;
