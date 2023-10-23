import PlayerLose from "./PlayerLose";
import React, { useContext, useEffect, useState } from "react";
import { ResponsesContext } from "../context/responsesContext";

import {
    Box,
    Button,
    Heading,
    Stack,
    useDisclosure,
  } from "@chakra-ui/react";

const Giveup = ({targetNum}) => {
    const [gaveUp, setGaveUp] = useState(false);
    const [staticTime, setStaticTime] = useState("");
    const [isDuplicate, setIsDuplicate] = useState(true);
    const [isPlayerWon, setIsPlayerWon] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
    const { responses, responseDispatch, timeElapsed } =
      useContext(ResponsesContext);

    useEffect(() => {
        if (gaveUp) {
          setStaticTime(timeElapsed);
          onOpen(); // Open the alert when gaveUp is true
        }
    }, [gaveUp, onOpen]);



    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={5}
            borderRadius="lg"
            boxShadow="lg"
            bgGradient="linear(to-r, blue.600, blue.900)"
            color="white"
            width="150px"
        >
            {!gaveUp && (
                <Button onClick={() => setGaveUp(true)}>
                    Give Up!
                </Button>
            )}
            <PlayerLose
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                timeElapsed={staticTime}
                totalAttempt={responses.length}
            />
        </Box>
    );
};
export default Giveup;
