import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const HowToPlay = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        How to Play?
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              How to Play?
            </AlertDialogHeader>

            <AlertDialogBody>
              Discover the hidden code! Click, or use arrow keys, to change your
              guess in each box. Bulls = correct code, correct position. Cows =
              correct code, wrong position. For example,if hidden code is 2145 and 
              the number you guessed is 1246 then bulls would be 1 and cows would be 
              2.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default HowToPlay;
