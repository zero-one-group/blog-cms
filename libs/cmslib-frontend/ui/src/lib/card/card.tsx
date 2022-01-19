import {
  Box,
  Heading,
  Text,
  CloseButton,
  Spacer,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';
import { AlertDialog } from '../alert-dialog/alert-dialog';
import * as React from 'react';
import { URL } from '@cms-blog/cmslib-frontend/data-access';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

/* eslint-disable-next-line */
export interface CardProps {
  bg?: string;
  title: string;
  subtitle?: string;
  text?: string | null;
  href?: string;
  boxShadow?: string;
  isEdit?: boolean;
  projectId?: number;
  onClick?: () => void;
  setState?: (state: string) => void;
}

export function Card(props: CardProps) {
  const history = useHistory();
  const [selectedId, setSelectedId] = React.useState<number | null>();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  function handleDelete(id: number | undefined) {
    setSelectedId(id);
    onOpenDelete();
  }

  async function handleConfirmDelete() {
    const id = Number(selectedId);
    try {
      await axios.delete(`${URL}/project/${props.projectId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      history.push('/home');
      if (props.setState) {
        props.setState('Project deleted successfully!');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSelectedId(null);
    }
  }
  return (
    <Box
      pl="10"
      pr="4"
      py="6"
      boxShadow={props.boxShadow ? props.boxShadow : 'lg'}
      rounded="lg"
      bg={props.bg ? props.bg : 'white'}
    >
      {props.isEdit ? (
        <HStack h="2">
          <Spacer />
          <CloseButton onClick={() => handleDelete(props.projectId)} />
        </HStack>
      ) : (
        ''
      )}
      <a
        style={{ cursor: 'pointer' }}
        onClick={props.onClick}
        href={props.href ? props.href : undefined}
      >
        <Heading as="h3" size="md" mt="2" mb="5">
          {props.title}
        </Heading>
        <Heading as="h5" size="sm" mb="2">
          {props.subtitle}
        </Heading>
        <Text fontSize="sm">{props.text}</Text>
      </a>
      <AlertDialog
        isOpen={isOpenDelete}
        variant="delete"
        onClose={onCloseDelete}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  );
}

export default Card;
