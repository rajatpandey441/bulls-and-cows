import React, { useState, useEffect, useContext } from "react";
import { ResponsesContext } from "../context/responsesContext";
import { Box, Heading, Text } from "@chakra-ui/react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const { timeElapsedDispatch } = useContext(ResponsesContext);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (seconds === 59) {
        if (minutes === 59) {
          setHours(hours + 1);
          setMinutes(0);
          setSeconds(0);
        } else {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      } else {
        setSeconds(seconds + 1);
      }
      timeElapsedDispatch({
        type: "updateTime",
        payload: `${hours}:${minutes}:${seconds}`,
      });
    }, 1000);

    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, [seconds, minutes, hours]);

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
      <Heading as="h2" size="lg" mb={4}>
        Timer
      </Heading>
      <Text fontSize="2xl" fontWeight="bold">
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </Text>
    </Box>
  );
};

export default Timer;
