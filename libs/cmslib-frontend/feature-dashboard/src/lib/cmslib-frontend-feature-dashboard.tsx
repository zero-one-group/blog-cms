import styled from 'styled-components';
import { TextAreaField, Navbar } from '@cms-blog/cmslib-frontend/ui';
import { Route, useHistory } from 'react-router-dom';
import { Stack, useColorModeValue, Box, Button } from '@chakra-ui/react';
import { useForm, useFieldArray } from 'react-hook-form';
import { AddIcon } from '@chakra-ui/icons';

/* eslint-disable-next-line */
export interface CmslibFrontendFeatureDashboardProps {}

export function CmslibFrontendFeatureDashboard(
  props: CmslibFrontendFeatureDashboardProps
) {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      payload: [
        {
          modal: null,
        },
      ],
    },
  });
  const history = useHistory();

  const { fields, append, remove } = useFieldArray({
    name: 'payload',
    control,
  });

  const onSubmit = async (formData: unknown) => {
    console.log(formData);
  };
  return (
    <Stack bg={useColorModeValue('white', 'inherit')} spacing={0}>
      <Navbar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          m="9"
          mt="16"
          p="9"
          borderColor="gray.300"
          borderWidth="1px"
          rounded="lg"
        >
          <h1>Welcome to CMS-Blog!</h1>
          <Box
            mt="5"
            p="9"
            pt="6"
            borderColor="gray.300"
            borderWidth="1px"
            rounded="lg"
          >
            {fields.map((field, index) => {
              return (
                <>
                  <TextAreaField
                    label="Modal"
                    {...register(`payload.${index}.modal`, {
                      required: 'fill the textarea!',
                    })}
                  />

                  {fields.length - 1 === index && (
                    <Button
                      w="10%"
                      onClick={() => append({})}
                      mt={6}
                      color="teal.300"
                      _hover={{ bg: 'tealPrimary.hover' }}
                      bg="tealPrimary.normal"
                    >
                      <AddIcon mr={2} />
                      Add
                    </Button>
                  )}
                </>
              );
            })}
          </Box>
        </Box>
      </form>
    </Stack>
  );
}

export default CmslibFrontendFeatureDashboard;
