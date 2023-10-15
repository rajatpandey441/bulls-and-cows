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
              correct code, wrong position. For example, if the hidden code is "2145,"
              and you guess "1246," the feedback would be: 
              Bulls : 1, the "1" in your guess is in the correct position.
              Cows: 2, the "2" and "4" in your guess are correct but in the wrong positions.
              <br/>
              <br/>
              You can use this feedback to make educated guesses and gradually narrow down 
              the possible combinations until you correctly guess the hidden code. 
              It's a fun and challenging logic puzzle game!
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
