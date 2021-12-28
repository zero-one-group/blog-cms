import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div`
  color: pink;
  padding-top: 200rem;
`;

export function Home(props: HomeProps) {
  return (
    <StyledHome>
      <h1>Welcome to Home!</h1>
    </StyledHome>
  );
}

export default Home;
