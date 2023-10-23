import {
  Button,
  Stack,
  Text,
  useDisclosure,
  Input,
  Flex,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { ResponsesContext } from "../context/responsesContext";
import PlayerWon from "./PlayerWon";

const NumButtons = ({ targetNum }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [staticTime, setStaticTime] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(true);
  const [isPlayerWon, setIsPlayerWon] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { responses, responseDispatch, timeElapsed } = useContext(ResponsesContext);
  useEffect(() => {
    if (isNumbersDuplicate()) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
    }
  }, [num1, num2, num3, num4]);
  const setNumState = (setFunc) => {
    setFunc((prev) => {
      return prev < 9 ? prev + 1 : 0;
    });
  };
  const submit = () => {
    if (isNumbersDuplicate()) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
      const numberByUser = [num1, num2, num3, num4].join("");
      //TODO:Write the logic for populating bull and cow variable
      //targetNum contains the random number generated at the start of the app
      //targetNum will remain constant through the lifecycle of the application
      //numberByUser contains the number submitted by user
      //if you want to access the individual digits, use num1,num2,num3,num4
      //Write your code below

      //console.log(targetNum);
      let { BULL, COW } = calculateBullsandCows(targetNum, numberByUser);
      //let  BULL = calculateBulls(targetNum, numberByUser);
      //let COW = calculateCows(targetNum, numberByUser)
      // IF BULLS == 4
      // Winning function that displays time taken, attempts taken, average time per attempt

      //Dont change anything for now below this line
      responseDispatch({
        type: "addResponse",
        payload: {
          response: numberByUser,
          bull: BULL,
          cow: COW,
        },
      });

      console.log("time el ", timeElapsed);
      setStaticTime(timeElapsed);
      if (BULL === 4) {
        onOpen();
      }
    }
  };
  let calculateBullsandCows = (targetNum, guess) => {
    let bulls = 0;
    let cows = 0;
    console.log("target ", targetNum);
    // Convert targetNum and guess to strings
    targetNum = targetNum.toString();
    guess = guess.toString();

    for (let i = 0; i < 4; i++) {
      if (targetNum[i] === guess[i]) {
        bulls++;
      } else if (targetNum.includes(guess[i])) {
        cows++;
      }
    }
    return { BULL: bulls, COW: cows };
  };

  const isNumbersDuplicate = () => {
    const numArr = [num1, num2, num3, num4];
    if (numArr.length !== new Set(numArr).size) {
      return true;
    } else {
      return false;
    }
  };

  const isCombinationDuplicate = (combination) => {
    return responses.some((response) => response.response === combination);
  };


  const handleInputChange = (event, setNum) => {
    let value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 0 && value <= 9) {
      setNum(value);
    }
  };

  const inputStyle = {
    background: "#E5E5E5", 
    border: "1px solid #333", 
    borderRadius: "4px", 
    padding: "0.5rem", 
    width: "40px", 
  };

  return (
    <>
      <Stack direction={"column"}>
        <Flex spacing={5}
                alignItems="center"
                justifyContent="center">
          <Stack direction={"row"}>
          
            <Input
              value={num1}
              onChange={(event) => handleInputChange(event, setNum1)}
              type="number"
              min={0}
              max={9}
              style={inputStyle} 
            />
            <Input
              value={num2}
              onChange={(event) => handleInputChange(event, setNum2)}
              type="number"
              min={0}
              max={9}
              style={inputStyle} 
            />
            <Input
              value={num3}
              onChange={(event) => handleInputChange(event, setNum3)}
              type="number"
              min={0}
              max={9}
              style={inputStyle} 
            />
            <Input
              value={num4}
              onChange={(event) => handleInputChange(event, setNum4)}
              type="number"
              min={0}
              max={9}
              style={inputStyle}
            />
          
          </Stack>
        </Flex>
        {isDuplicate ? ( // check for duplicate digits
          <Text
            fontSize="md"
            paddingTop={2}
            margin={"auto"}
            fontWeight={600}
            sx={{ width: "75%" }}
            color={"white"}
          >
            No Duplicate Digits Allowed
          </Text>

        ) :  isCombinationDuplicate([num1, num2, num3, num4].join("")) ? ( // check for duplicate guesses
          <Text
            fontSize="md"
            paddingTop={2}
            margin={"auto"}
            fontWeight={600}
            sx={{ width: "75%" }}
            color={"white"}
          >
            No Duplicate Guesses Allowed
          </Text>
        )
          : ( // submit if nothing wrong with guess
          <Button onClick={submit} sx={{ width: "50%" }} margin={"auto"}>
            Submit
          </Button>
        )}
      </Stack>
      <PlayerWon
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        timeElapsed={staticTime}
        totalAttempt={responses.length}
      />
    </>
  );
};
export default NumButtons;
