import * as React from 'react';
import axios from 'axios';
import { URL } from '../constant';

/* eslint-disable-next-line */
export type DashboardDataProps = {
  user_id: number;
};

export type DashboardData = {
  id: number;
  user_id: number;
  project_name: string;
  created_at: string;
  updated_at: string;
};

export function GetDashboardData(props: DashboardDataProps) {
  const { user_id } = props;
  const [dashboardData, setDashboardData] = React.useState<DashboardData[]>();

  console.log(user_id);
  React.useEffect(() => {
    axios
      .get(`${URL}/project?&user_id=${user_id}`, {
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
  }, [user_id]);

  console.log(dashboardData);
  return dashboardData;
  // return [
  //   {
  //     id: 1,
  //     title: 'Surabaya.py',
  //     subtitle: 'website 1',
  //     text: null,
  //     created_at: '2021-10-25T13:18:36.142',
  //     updated_at: '2021-10-25T13:18:36.142',
  //   },
  //   {
  //     id: 2,
  //     title: 'Surabaya.dev',
  //     subtitle: 'website 2',
  //     text: null,
  //     created_at: '2021-10-25T13:18:36.142',
  //     updated_at: '2021-10-25T13:18:36.142',
  //   },
  //   {
  //     id: 3,
  //     title: 'Surabaya.web',
  //     subtitle: 'website 3',
  //     text: null,
  //     created_at: '2021-10-25T13:18:36.142',
  //     updated_at: '2021-10-25T13:18:36.142',
  //   },
  //   {
  //     id: 4,
  //     title: 'Surabaya.jaja',
  //     subtitle: 'website 4',
  //     text: null,
  //     created_at: '2021-10-25T13:18:36.142',
  //     updated_at: '2021-10-25T13:18:36.142',
  //   },
  //   {
  //     id: 5,
  //     title: 'Surabaya.haha',
  //     subtitle: 'website 5',
  //     text: null,
  //     created_at: '2021-10-25T13:18:36.142',
  //     updated_at: '2021-10-25T13:18:36.142',
  //   },
  // ];
}

// export default GetDashboardData;
