/* eslint-disable-next-line */
export type DashboardDataProps = {
  id: number;
  title: string;
  subtitle: string;
  text: string | null;
  created_at: string;
  updated_at: string;
};

export async function getDashboardData() {
  return [
    {
      id: 1,
      title: 'Surabaya.py',
      subtitle: 'website 1',
      text: null,
      created_at: '2021-10-25T13:18:36.142',
      updated_at: '2021-10-25T13:18:36.142',
    },
    {
      id: 2,
      title: 'Surabaya.dev',
      subtitle: 'website 2',
      text: null,
      created_at: '2021-10-25T13:18:36.142',
      updated_at: '2021-10-25T13:18:36.142',
    },
    {
      id: 3,
      title: 'Surabaya.web',
      subtitle: 'website 3',
      text: null,
      created_at: '2021-10-25T13:18:36.142',
      updated_at: '2021-10-25T13:18:36.142',
    },
    {
      id: 4,
      title: 'Surabaya.jaja',
      subtitle: 'website 4',
      text: null,
      created_at: '2021-10-25T13:18:36.142',
      updated_at: '2021-10-25T13:18:36.142',
    },
    {
      id: 5,
      title: 'Surabaya.haha',
      subtitle: 'website 5',
      text: null,
      created_at: '2021-10-25T13:18:36.142',
      updated_at: '2021-10-25T13:18:36.142',
    },
  ];
}

export default getDashboardData;
