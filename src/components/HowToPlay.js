import { QuestionIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const HowToPlay = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <>
      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, blue.600, blue.900)"
        size="lg"
        leftIcon={<Icon as={QuestionIcon} boxSize={6} />}
        variant="solid"
        boxShadow="md"
        _hover={{
          boxShadow: "xl",
          transform: "translateY(-2px)",
        }}
        onClick={onOpen}
      >
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
              Discover the hidden code! Type, use arrow keys, or scroll wheel to change your
              guess in each box. 
              <br />
              <br />
              Bulls = correct code, correct position. <br />
              Cows = correct code, wrong position. <br />
              <br />
              <br />
              For example, if the hidden code is "2145," and you guess "1246,"
              the feedback would be: <br />
              Bulls : 1, because the "1" in your guess is in the correct position. <br />
              Cows: 2, because the "2" and "4" in your guess are correct but in the wrong positions.<br />
              <br />
              <br />
              You can use this feedback to make educated guesses and gradually
              narrow down the possible combinations until you correctly guess
              the hidden code. It's a fun and challenging logic puzzle game!
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
