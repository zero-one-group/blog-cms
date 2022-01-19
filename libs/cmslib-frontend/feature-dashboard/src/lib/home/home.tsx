import { Box, Stack, Heading, Grid } from '@chakra-ui/react';
import * as React from 'react';
import axios from 'axios';
import {
  GetDashboardData,
  DashboardData,
} from '@cms-blog/cmslib-frontend/data-access';
import { Card } from '@cms-blog/cmslib-frontend/ui';
import { useEffect, useState, useMemo } from 'react';
/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const [dashboardData, setDashboardData] = useState<DashboardData[]>();

  // TODO: Can use dynamic user_id
  const userId = 1;
  const URL = 'http://localhost:8080';

  React.useEffect(() => {
    axios
      .get(`${URL}/project?&user_id=${userId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((result) => {
        setDashboardData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Stack>
      <Box m="9" mt="20" p="9" boxShadow="xl" rounded="lg" bg="gray.100">
        <Heading as="h3" size="lg" mb="3">
          Dashboard
        </Heading>
        {dashboardData ? (
          dashboardData.length > 0 ? (
            <>
              <Heading as="h5" size="md" mt="16">
                Choose Your Project:
              </Heading>
              <Grid templateColumns="repeat(4, 1fr)" gap={16} mt="8">
                {dashboardData.map((data, index) => {
                  return (
                    <Card
                      key={index}
                      title={data.project_name}
                      subtitle={data.descriptions}
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
                  bg="green.200"
                  boxShadow="xl"
                />
              </Grid>
            </>
          ) : (
            <>
              <Heading as="h5" size="md" mt="16">
                Create Your First Project!
              </Heading>
              <Grid templateColumns="repeat(5, 1fr)" gap={16} mt="8" mb="8">
                <Card
                  title="Create New Project"
                  subtitle="+"
                  href="/content-management-form"
                  bg="green.200"
                />
              </Grid>
            </>
          )
        ) : (
          ''
        )}
      </Box>
    </Stack>
  );
}

export default Home;
