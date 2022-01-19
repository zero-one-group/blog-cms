import {
  AlertDialog as ChakraAlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import { useRef } from 'react';

export interface AlertDialogProps {
  isOpen: boolean;
  onClose?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
  variant?: 'delete' | 'download';
}

export function AlertDialog({
  isOpen,
  onClose,
  onCancel,
  onConfirm,
  variant = 'delete',
}: AlertDialogProps) {
  const cancelRefDelete = useRef(null);

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    handleClose();
  };

  const themeContent = {
    delete: {
      title: 'Delete',
      description: "Are you sure? You can't undo this action afterwards.",
      button: 'Delete',
      colorScheme: 'red',
    },
    download: {
      title: 'Download',
      description: 'Are you sure. Want to download excel file?',
      button: 'Download',
      colorScheme: 'blue',
    },
  };

  return (
    <ChakraAlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRefDelete}
      onClose={handleClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {themeContent[variant].title}
          </AlertDialogHeader>

          <AlertDialogBody>{themeContent[variant].description}</AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={cancelRefDelete}
              onClick={() => {
                if (onCancel) {
                  onCancel();
                }
                handleClose();
              }}
            >
              Cancel
            </Button>
            <Button
              colorScheme={themeContent[variant].colorScheme}
              onClick={() => {
                handleConfirm();
              }}
              ml={3}
            >
              {themeContent[variant].button}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </ChakraAlertDialog>
  );
}

export default AlertDialog;
