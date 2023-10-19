import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const PlayerWon = ({
  isOpen,
  cancelRef,
  onClose,
  totalAttempt,
  timeElapsed,
}) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      bgGradient="linear(to-r, green.200, blue.200)"
    >
      <AlertDialogOverlay>
        <AlertDialogContent bgGradient="linear(to-r, green.200, blue.200)">
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Congratulations! 🎉
          </AlertDialogHeader>

          <AlertDialogBody>
            <VStack
              spacing={5}
              alignItems="center"
              justifyContent="center"
              bgGradient="linear(to-r, green.200, blue.200)"
            >
              <Heading as="h1" size="2xl" color="white">
                You won the game!
              </Heading>
              <Text fontSize="xl" color="white">
                Number of attempts: {totalAttempt}
              </Text>
              <Text fontSize="xl" color="white">
                Time elapsed: {timeElapsed}
              </Text>
              <Button
                colorScheme="teal"
                onClick={() => {
                  window.location.reload();
                }}
              >
                New Game
              </Button>
            </VStack>
          </AlertDialogBody>

          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default PlayerWon;
