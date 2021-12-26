import { useForm } from 'react-hook-form';
import {
  InputField,
  PasswordField,
  SubmitButton,
} from '@cms-blog/cmslib-frontend/ui';
import { Box, useColorModeValue, Heading } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

/* eslint-disable-next-line */
export interface CmslibFrontendFeatureLoginProps {}

export function CmslibFrontendFeatureLogin(
  props: CmslibFrontendFeatureLoginProps
) {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (formData: unknown) => {
    history.push('/home');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        bg={useColorModeValue('gray.50', 'inherit')}
        minH="100vh"
        py="12"
        px={{ base: '4', lg: '8' }}
      >
        <Box maxW="md" mx="auto">
          <Heading mb="9" textAlign="center" size="xl" fontWeight="extrabold">
            Blog-CMS
          </Heading>
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            py="8"
            px={{ base: '4', md: '10' }}
            shadow="base"
            rounded={{ sm: 'lg' }}
          >
            <InputField
              {...register('username', {
                required: 'please input your username',
              })}
              type="string"
              label="Username"
            />
            <PasswordField {...register('password')} />
            <SubmitButton buttonLabel="Login" />
          </Box>
        </Box>
      </Box>
    </form>
  );
}

export default CmslibFrontendFeatureLogin;
