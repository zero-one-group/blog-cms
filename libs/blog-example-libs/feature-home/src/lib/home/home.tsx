import {
  Box,
  Stack,
  Heading,
  Grid,
  Button,
  Spacer,
  HStack,
  Center,
  Flex,
} from '@chakra-ui/react';
import * as React from 'react';
import axios from 'axios';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import styled from 'styled-components';
import { Card } from '@cms-blog/blog-example-libs/ui';
/* eslint-disable-next-line */
export interface HomeProps {}

export type HandleCreateEditProps = {
  mode: string;
  project_id: number;
  project_name: string;
  descriptions: string;
};

type FormData = {
  image_url: string;
  header: string;
  subheader: string;
};

type CMSDataType = {
  user_id: number;
  project_name: string;
  descriptions: string;
  hero: FormData[];
  carousel: FormData[];
  content: FormData[];
};

export function Home(props: HomeProps) {
  const [CMSData, setCMSData] = React.useState<CMSDataType>();
  const [heroIndex, setHeroIndex] = React.useState<number>(0);

  // This projectId is generated from CMS-Blog
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

  const HeroWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${CMSData?.hero[heroIndex].image_url});
  `;

  const CarouselWrapper = styled.div`
    position: relative;
    overflow: hidden;
    min-height: 60vh;
    padding: 3rem 10vh;
  `;

  // console.log(heroLength, 'INI LENGTH')
  const handleHeroNext = () => {
    if (CMSData) {
      // setHeroLength()
      if (heroIndex < CMSData.hero.length - 1) {
        setHeroIndex(heroIndex + 1);
      } else {
        return;
      }
    }
  };

  // console.log(heroLength, 'INI LENGTH')
  const handleHeroBack = () => {
    if (CMSData) {
      // setHeroLength()
      if (heroIndex > 0) {
        setHeroIndex(heroIndex - 1);
      } else {
        return;
      }
    }
  };

  // // const [counter, setCounter] = useState(30);
  // React.useEffect(
  //   () => {
  //     const id = setInterval(() => {
  //       if(CMSData){
  //       if (heroIndex < CMSData.hero.length - 1) {
  //       setHeroIndex((count) => count + 1);
  //       }
  //       }
  //     }, 1000);
  //     return () => {
  //       clearInterval(id);
  //     };
  //   },
  //   [] // empty dependency array
  // );

  return (
    <Stack>
      <HeroWrapper>
        {/* <img src={CMSData?.hero[0].image_url} alt="/" /> */}
        <HStack mt="50vh">
          <Button onClick={() => handleHeroBack()}>
            <ArrowBackIcon w="5" h="5" />
          </Button>
          <Spacer />
          <Stack>
            <Center>
              <Heading size="2xl" as="h4" textColor="white">
                {CMSData?.hero[heroIndex].header}{' '}
              </Heading>
            </Center>
            <Center>
              <Heading size="md" textColor="white" as="h3">
                {CMSData?.hero[heroIndex].header}
              </Heading>
            </Center>
          </Stack>
          <Spacer />
          <Button onClick={() => handleHeroNext()}>
            <ArrowForwardIcon w="5" h="5" />
          </Button>
        </HStack>
      </HeroWrapper>
      <CarouselWrapper>
        <Center>
          <Heading size="lg">Kegiatan Komunitas</Heading>
        </Center>
        <Center>
          <Flex alignContent="center">
            {CMSData?.carousel.map((value, index) => {
              return (
                <>
                  {/* <Spacer/> */}
                  <Card
                    key={index}
                    image={value.image_url}
                    title={value.header}
                    text={value.subheader}
                  />
                  {/* <Spacer/> */}
                </>
              );
            })}
          </Flex>
        </Center>
      </CarouselWrapper>
    </Stack>
  );
}

export default Home;
