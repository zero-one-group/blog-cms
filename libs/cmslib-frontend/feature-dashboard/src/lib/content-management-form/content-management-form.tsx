import { TextAreaField } from '@cms-blog/cmslib-frontend/ui';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  CloseButton,
  FormControl,
  Input,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import { useForm, useFieldArray } from 'react-hook-form';
import { AddIcon } from '@chakra-ui/icons';
import axios from 'axios';
import * as React from 'react';

/* eslint-disable-next-line */
export interface ContentManagementFormProps {}

type FormData = {
  image_url: string;
  header: string;
  subheader: string;
};

type SubmitDataType = {
  form_data: {
    project_name: string;
    descriptions: string;
    hero: FormData[];
    carousel: FormData[];
    content: FormData[];
  };
};

type LocationType = {
  mode: string;
  project_id: number;
  project_name: string;
  descriptions: string;
  form_data: FormData;
};

type FormProps = {
  index: number;
  field: {
    image_url: string;
    header: string;
    subheader: string;
  };
  name: 'hero' | 'carousel' | 'content';
  fields: {
    image_url: string;
    header: string;
    subheader: string;
  }[];
};

export function ContentManagementForm(props: ContentManagementFormProps) {
  const location = useLocation<LocationType>();
  // TODO: can use dynamic user_id
  const userId = 1;
  const URL = 'http://localhost:8080';

  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      form_data:
        location.state.mode === 'edit'
          ? location.state.form_data
          : {
              project_name: '',
              descriptions: '',
              hero: [
                {
                  image_url: '',
                  header: '',
                  subheader: '',
                },
              ],
              carousel: [
                {
                  image_url: '',
                  header: '',
                  subheader: '',
                },
              ],
              content: [
                {
                  image_url: '',
                  header: '',
                  subheader: '',
                },
              ],
            },
    },
  });
  const history = useHistory();

  const {
    fields: heroFields,
    append: appendHero,
    remove: removeHero,
  } = useFieldArray({
    name: 'form_data.hero',
    control,
  });

  const {
    fields: carouselFields,
    append: appendCarousel,
    remove: removeCarousel,
  } = useFieldArray({
    name: 'form_data.carousel',
    control,
  });

  const {
    fields: contentFields,
    append: appendContent,
    remove: removeContent,
  } = useFieldArray({
    name: 'form_data.content',
    control,
  });

  const onSubmit = async (formData: SubmitDataType) => {
    try {
      if (location.state.mode === 'create') {
        await axios.post(
          `${URL}/form`,
          { user_id: userId, ...formData.form_data },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        history.push('/home', {});
      }
      if (location.state.mode === 'edit') {
        await axios.put(
          `${URL}/form/${location.state.project_id}`,
          formData.form_data,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        history.push('/home', {});
      }
    } catch (err) {
      console.log(err);
    }
    console.log(formData.form_data);
  };

  const handleClick = () => {
    // const textField = document.createElement('textarea');

    const formDataUrl = `${URL}/form?&project_id=${location.state.project_id}`;
    return alert(` ${formDataUrl}`);
  };

  // Form Component
  const Form = (props: FormProps) => {
    const { index, field, name } = props;
    const bgColor = () => {
      if (name === 'hero') {
        return 'red.500';
      } else if (name === 'carousel') {
        return 'yellow.500';
      } else {
        return 'green.500';
      }
    };

    return (
      <Box mt="5" p="9" pt="6" boxShadow="lg" rounded="lg" bg="white">
        {props.index !== 0 && (
          <CloseButton
            bg="red"
            color="white"
            float="right"
            onClick={() => {
              if (name === 'hero') {
                return removeHero(index);
              }
              if (name === 'carousel') {
                return removeCarousel(index);
              }
              if (name === 'content') {
                return removeContent(index);
              }
            }}
          />
        )}
        <Heading as="h3" size="md" mb="3">
          {props.name} {index + 1}
        </Heading>
        <TextAreaField
          defaultValues={field.image_url}
          label="Image URL"
          {...register(`form_data.${name}.${index}.image_url`, {
            required: 'fill the textarea!',
          })}
        />
        <TextAreaField
          defaultValues={field.header}
          label="Header"
          {...register(`form_data.${name}.${index}.header`, {
            required: 'fill the textarea!',
          })}
        />
        <TextAreaField
          defaultValues={field.subheader}
          label="Subheader"
          {...register(`form_data.${name}.${index}.subheader`, {
            required: 'fill the textarea!',
          })}
        />

        {props.fields.length - 1 === index && (
          <Button
            w="10%"
            onClick={() => {
              if (name === 'hero') {
                appendHero({
                  image_url: '',
                  header: '',
                  subheader: '',
                });
              }
              if (name === 'carousel') {
                appendCarousel({
                  image_url: '',
                  header: '',
                  subheader: '',
                });
              }
              if (name === 'content') {
                appendContent({
                  image_url: '',
                  header: '',
                  subheader: '',
                });
              }
            }}
            mt={6}
            color="white"
            _hover={{ bg: 'tealPrimary.hover' }}
            bg={bgColor()}
          >
            <AddIcon mr={2} />
            Add
          </Button>
        )}
      </Box>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack mx="9" mt="20" p="6">
        <FormControl pr="10">
          <Heading as="h2" size="lg" mb="4">
            Project Name
          </Heading>
          <Input
            {...register(`form_data.project_name`, {
              required: 'Please fill the project name',
            })}
          />
        </FormControl>
        <FormControl pl="10">
          <Heading as="h2" size="lg" mb="4">
            Project Descriptions
          </Heading>
          <Input
            {...register(`form_data.descriptions`, {
              required: 'Please fill the project name',
            })}
          />
        </FormControl>
      </HStack>
      {location.state.mode === 'edit' ? (
        <Box textAlign="left" px="16">
          <Spacer />
          <Button
            color="white"
            boxShadow="lg"
            _hover={{ bg: 'tealPrimary.hover' }}
            bg="blue.400"
            onClick={() => handleClick()}
          >
            Show Project Data Access Link
          </Button>
        </Box>
      ) : (
        ''
      )}

      <Box m="9" p="9" boxShadow="lg" rounded="lg" bg="gray.100">
        <Heading as="h2" size="lg">
          Hero
        </Heading>
        {heroFields.map((field, index) => {
          return (
            <Form field={field} index={index} name="hero" fields={heroFields} />
          );
        })}
      </Box>
      <Box m="9" mt="16" p="9" boxShadow="lg" rounded="lg" bg="gray.100">
        <Heading as="h2" size="lg">
          Carousel
        </Heading>
        {carouselFields.map((field, index) => {
          return (
            <Form
              field={field}
              index={index}
              name="carousel"
              fields={carouselFields}
            />
          );
        })}
      </Box>
      <Box m="9" mt="16" mb="8" p="9" boxShadow="lg" rounded="lg" bg="gray.100">
        <Heading as="h2" size="lg">
          Content
        </Heading>
        {contentFields.map((field, index) => {
          return (
            <Form
              field={field}
              index={index}
              name="content"
              fields={contentFields}
            />
          );
        })}
      </Box>
      <Box textAlign="center" mb="16">
        <Button
          id="generate-form"
          type="submit"
          color="white"
          boxShadow="lg"
          minWidth="50rem"
          _hover={{ bg: 'tealPrimary.hover' }}
          bg="blue.400"
        >
          Submit!
        </Button>
      </Box>
    </form>
  );
}

export default ContentManagementForm;
