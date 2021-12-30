import { TextAreaField } from '@cms-blog/cmslib-frontend/ui';
import { useHistory } from 'react-router-dom';
import { Box, Button, Heading, CloseButton } from '@chakra-ui/react';
import { useForm, useFieldArray } from 'react-hook-form';
import { AddIcon } from '@chakra-ui/icons';

/* eslint-disable-next-line */
export interface ContentManagementFormProps {}

export function ContentManagementForm(props: ContentManagementFormProps) {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      hero: [
        {
          imageURL: '',
          header: '',
          subheader: '',
        },
      ],
      carousel: [
        {
          imageURL: '',
          header: '',
          subheader: '',
        },
      ],
      content: [
        {
          imageURL: '',
          header: '',
          subheader: '',
        },
      ],
    },
  });
  const history = useHistory();

  const {
    fields: heroFields,
    append: appendHero,
    remove: removeHero,
  } = useFieldArray({
    name: 'hero',
    control,
  });

  const {
    fields: carouselFields,
    append: appendCarousel,
    remove: removeCarousel,
  } = useFieldArray({
    name: 'carousel',
    control,
  });

  const {
    fields: contentFields,
    append: appendContent,
    remove: removeContent,
  } = useFieldArray({
    name: 'content',
    control,
  });

  const onSubmit = async (formData: unknown) => {
    console.log(formData);
  };

  type Hero = {
    imageURL: string;
    header: string;
    subheader: string;
  };
  type FormProps = {
    index: number;
    field: Hero;
    name: 'hero' | 'carousel' | 'content';
    fields: Hero[];
  };

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
          defaultValues={field.imageURL}
          label="Image URL"
          {...register(`${name}.${index}.imageURL`, {
            required: 'fill the textarea!',
          })}
        />
        <TextAreaField
          defaultValues={field.header}
          label="Header"
          {...register(`${name}.${index}.header`, {
            required: 'fill the textarea!',
          })}
        />
        <TextAreaField
          defaultValues={field.subheader}
          label="Subheader"
          {...register(`${name}.${index}.subheader`, {
            required: 'fill the textarea!',
          })}
        />

        {props.fields.length - 1 === index && (<Button
          w="10%"
          onClick={() => {
            if (name === 'hero') {
              appendHero({
                imageURL: '',
                header: '',
                subheader: '',
              });
            }
            if (name === 'carousel') {
              appendCarousel({
                imageURL: '',
                header: '',
                subheader: '',
              });
            }
            if (name === 'content') {
              appendContent({
                imageURL: '',
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
        </Button>) }
      </Box>
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box m="9" mt="20" p="9" boxShadow="lg" rounded="lg" bg="gray.100">
        <Heading as="h2" size="lg">
          Hero
        </Heading>
        {heroFields.map((field, index) => {
          return <Form field={field} index={index} name="hero" fields={heroFields} />;
        })}
      </Box>
      <Box m="9" mt="16" p="9" boxShadow="lg" rounded="lg" bg="gray.100">
        <Heading as="h2" size="lg">
          Carousel
        </Heading>
        {carouselFields.map((field, index) => {
          return <Form field={field} index={index} name="carousel" fields={carouselFields}/>;
        })}
      </Box>
      <Box
        m="9"
        mt="16"
        mb="16"
        p="9"
        boxShadow="lg"
        rounded="lg"
        bg="gray.100"
      >
        <Heading as="h2" size="lg">
          Content
        </Heading>
        {contentFields.map((field, index) => {
          return <Form field={field} index={index} name="content" fields={contentFields} />;
        })}
      </Box>
    </form>
  );
}

export default ContentManagementForm;
