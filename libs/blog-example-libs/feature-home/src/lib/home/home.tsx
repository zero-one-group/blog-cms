import { Box, Stack, Heading, Grid } from '@chakra-ui/react';
import * as React from 'react';
import axios from 'axios';
import {
  GetDashboardData,
  DashboardData,
} from '@cms-blog/cmslib-frontend/data-access';
import { Card } from '@cms-blog/cmslib-frontend/ui';
import { useEffect, useState, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Slider from '../../../../ui/src/lib/hero-slider/Slider';
// JSX
import HeroSlider, { Slide, MenuNav, OverlayContainer } from 'hero-slider';

// Images
const bogliasco = 'https://i.imgur.com/Gu5Cznz.jpg';
const countyClare = 'https://i.imgur.com/idjXzVQ.jpg';
const craterRock = 'https://i.imgur.com/8DYumaY.jpg';
const giauPass = 'https://i.imgur.com/8IuucQZ.jpg';
/* eslint-disable-next-line */
export interface HomeProps {}

export type HandleCreateEditProps = {
  mode: string;
  project_id: number;
  project_name: string;
  descriptions: string;
};

export function Home(props: HomeProps) {
  const [CMSData, setCMSData] = React.useState<DashboardData[]>();
  const [project, setProject] = React.useState<string>('');
  console.log(CMSData);
  const history = useHistory();
  // TODO: Can use dynamic user_id
  const projectId = 1642990876;
  const URL = 'http://localhost:8080';

  React.useEffect(() => {
    axios
      .get(`${URL}/form?&project_id=${projectId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((result) => {
        setCMSData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const handleOnClick = async (props: HandleCreateEditProps) => {
  //   if (props.mode === 'edit') {
  //     try {
  //       const response = await axios.get(
  //         `${URL}/form?&project_id=${props.project_id}`,
  //         {
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         }
  //       );
  //       history.push('/content-management-form', {
  //         mode: props.mode,
  //         project_id: props.project_id,
  //         project_name: props.project_name,
  //         descriptions: props.descriptions,
  //         form_data: response.data,
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   if (props.mode === 'create') {
  //     history.push('/content-management-form', {
  //       mode: props.mode,
  //       project_id: props.project_id,
  //       project_name: props.project_name,
  //       descriptions: props.descriptions,
  //       form_data: '',
  //     });
  //   }
  return (
    <Stack>
      AHAHA
      {/* <Slider /> */}
    </Stack>
  );
}

export default Home;
