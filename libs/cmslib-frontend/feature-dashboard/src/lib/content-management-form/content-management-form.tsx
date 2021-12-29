import styled from 'styled-components';
import { TextAreaField } from '@cms-blog/cmslib-frontend/ui';
import { useHistory } from 'react-router-dom';
import { Box, Button, Heading, CloseButton } from '@chakra-ui/react';
import { useForm, useFieldArray } from 'react-hook-form';
import { AddIcon } from '@chakra-ui/icons';

/* eslint-disable-next-line */
export interface ContentManagementFormProps {}

const StyledContentManagementForm = styled.div`
  color: pink;
`;

export function ContentManagementForm(props: ContentManagementFormProps) {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      payload: [
        {
          hero: {
            imageURL: '',
            header: '',
            subheader: '',
          },
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        m="9"
        mt="16"
        p="9"
        borderColor="gray.300"
        borderWidth="1px"
        rounded="lg"
        bg="gray.100"
      >
        <Heading as="h2" size="lg">
          Hero
        </Heading>
        {fields.map((field, index) => {
          return (
            <Box
              mt="5"
              p="9"
              pt="6"
              borderColor="gray.300"
              borderWidth="1px"
              rounded="lg"
              bg="white"
            >
              {index !== 0 && (
                <CloseButton
                  bg="red"
                  color="white"
                  float="right"
                  onClick={() => remove(index)}
                />
              )}
              <Heading as="h3" size="md" mb="3">
                Hero {index + 1}
              </Heading>
              <TextAreaField
                defaultValues={field.hero.imageURL}
                label="Image URL"
                {...register(`payload.${index}.hero.imageURL`, {
                  required: 'fill the textarea!',
                })}
              />
              <TextAreaField
                defaultValues={field.hero.header}
                label="Header"
                {...register(`payload.${index}.hero.header`, {
                  required: 'fill the textarea!',
                })}
              />
              <TextAreaField
                defaultValues={field.hero.subheader}
                label="Subheader"
                {...register(`payload.${index}.hero.subheader`, {
                  required: 'fill the textarea!',
                })}
              />

              {fields.length - 1 === index && (
                <Button
                  w="10%"
                  onClick={() =>
                    append({
                      hero: {
                        imageURL: '',
                        header: '',
                        subheader: '',
                      },
                    })
                  }
                  mt={6}
                  color="white"
                  _hover={{ bg: 'tealPrimary.hover' }}
                  bg="gray.500"
                >
                  <AddIcon mr={2} />
                  Add
                </Button>
              )}
            </Box>
          );
        })}
      </Box>
    </form>
  );
}

export default ContentManagementForm;
